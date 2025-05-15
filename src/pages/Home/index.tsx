import Logo from "../../components/UI/Logo";
import ToggleOption from "../../components/ToggleOption";
import Select from "../../components/UI/Select";
import Title from "../../components/UI/Title";
import {
  HomeContainer,
  InputErrorMessage,
  LinkContainer,
  LinkInput,
  LogoContainer,
  OnlyLetterOptionContainer,
  OnlyNumberOptionContainer,
  OptionsContainer,
  SubmitButton,
} from "./style";
import Banner from "../../components/UI/Banner";
import CustomLink from "../../components/UI/CustomLink";
import { useState } from "react";
import api from "../../services/api";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Success from "../../components/UI/Success";
import getCustomErrorMessage from "../../services/inputValidityList";

const Home = () => {
  const [showCustomLink, setShowCustomLink] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [onlyLetter, setOnlyLetter] = useState(false);
  const [onlyNumber, setOnlyNumber] = useState(false);
  const [originalUrl, setOriginalUrl] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [expirationTimeInMinutes, setExpirationTimeInMinutes] =
    useState<number>(60);
  const [shortUrl, setShortUrl] = useState("");
  const originRedirectUrl = "https://minilink-e0m7.onrender.com";
  const [success, setSuccess] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState("");

  const handleReset = () => {
    setShowCustomLink(false);
    setDisableButton(false);
    setOnlyLetter(false);
    setOnlyNumber(false);
    setOriginalUrl("");
    setCustomUrl("");
    setExpirationTimeInMinutes(60);
    setShortUrl("");
    setSuccess(false);
  };

  const ToggleCustomLink = () => {
    setShowCustomLink(!showCustomLink);
    setDisableButton(!disableButton);
    setOnlyLetter(false);
    setOnlyNumber(false);
  };
  const ToggleLetterOption = () => {
    setOnlyLetter((prev) => !prev);
    setOnlyNumber(false);
  };
  const ToggleNumberOption = () => {
    setOnlyNumber((prev) => !prev);
    setOnlyLetter(false);
  };

  const getEndpoint = () => {
    if (onlyLetter) return "/shorten/letter";
    if (onlyNumber) return "/shorten/number";
    if (showCustomLink) return "/shorten/custom";
    return "/shorten";
  };

  const options = [
    { label: "1 Hora", value: 60 },
    { label: "3 Horas", value: 180 },
    { label: "6 Horas", value: 360 },
    { label: "12 Horas", value: 720 },
    { label: "24 Horas", value: 1440 },
  ];

  const handleSelectValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setExpirationTimeInMinutes(parseInt(event.target.value));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      if (!customUrl && showCustomLink) {
        toast.clearWaitingQueue();
        toast.error("Preencha o campo link personalizado.");
        return;
      }

      if (!originalUrl) {
        const form = event.currentTarget;
        const input = form.elements.namedItem(
          "originalUrl"
        ) as HTMLInputElement;

        const message = getCustomErrorMessage(input);
        setInputErrorMessage(message);
        return;
      }
      const endpoint = getEndpoint();
      const data = {
        originalUrl,
        expirationTimeInMinutes,
        ...(showCustomLink && { customUrl }),
      };

      const response = await api.post(endpoint, data);
      if (response.status === 201) {
        setShortUrl(
          new URL(response.data.shortUrl, originRedirectUrl).toString()
        );
        setSuccess(true);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(`${error.response?.data.msg}`);
      }
    }
  };

  const getCustomUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomUrl(event.target.value);
  };

  const handleInputValidation = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const message = getCustomErrorMessage(event.currentTarget);
    setInputErrorMessage(message);
  };

  return (
    <HomeContainer>
      <ToastContainer
        limit={1}
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <LogoContainer>
        <Logo />
        <Banner />
      </LogoContainer>
      {success ? (
        <Success
          getOriginalUrl={originalUrl}
          getShortUrl={shortUrl}
          handleReset={handleReset}
        />
      ) : (
        <LinkContainer onSubmit={handleSubmit} noValidate>
          <Title title="Insira sua URL:" />
          <LinkInput
            type="url"
            placeholder="https://www.exemplo.com"
            onChange={(e) => {
              setOriginalUrl(e.currentTarget.value);
              setInputErrorMessage("");
            }}
            id="inputUrl"
            onBlur={handleInputValidation}
            name="originalUrl"
            required
          />
          <InputErrorMessage htmlFor="inputUrl">
            {inputErrorMessage}
          </InputErrorMessage>
          <OptionsContainer>
            <Title title="Opções:" />
            <ToggleOption
              title="Customize seu link"
              informationText="Crie seu próprio link personalizável"
              onClick={ToggleCustomLink}
            />
            {showCustomLink ? <CustomLink onChange={getCustomUrl} /> : <></>}
          </OptionsContainer>
          <Title title="Tempo de duração" />
          <Select options={options} onChange={handleSelectValue} />
          <OnlyNumberOptionContainer>
            <ToggleOption
              title="Link com apenas números"
              informationText="Gere um link com apenas números"
              disabled={disableButton}
              onClick={ToggleNumberOption}
              checked={onlyNumber}
            />
          </OnlyNumberOptionContainer>
          <OnlyLetterOptionContainer>
            <ToggleOption
              title="Link com apenas letras"
              informationText="Gere um link com apenas letras"
              disabled={disableButton}
              onClick={ToggleLetterOption}
              checked={onlyLetter}
            />
          </OnlyLetterOptionContainer>
          <SubmitButton type="submit">Crie seu minilink</SubmitButton>
        </LinkContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
