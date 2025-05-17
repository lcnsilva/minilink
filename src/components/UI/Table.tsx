import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../services/api";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const TableContainer = styled.table`
  width: 100%;
  height: auto;
  border-collapse: collapse;
  overflow: hidden;
  border: none;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;

const TableRow = styled.tr`
    border-right: 2px solid #F5F5F5;
`;
const TableHeader = styled.thead`
  background-color: #2f3e2f;
  color: #fff;
`;
const TableCell = styled.td`
    text-align: center;
    padding: 1rem;
    border-right: 2px solid #F5F5F5;
    border-bottom: 2px solid #F5F5F5;
    font-size: 16px;
    white-space: nowrap;
    color: #333;
    max-width: 250px;
    overflow-y: hidden;
    overflow-x: auto;
`;

const TableTitle = styled.th`
  text-align: center;
  padding: 1rem;
  font-weight: 600;
`;
const TableBody = styled.tbody``;

const TableLink = styled.a`
    cursor: pointer;
    color: #2f3e2f;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
`;

const Table = () => {

    const originRedirectUrl = "https://minilink-e0m7.onrender.com/";

  const [urlList, setUrlList] = useState([
    {
      originalUrl: "",
      shortUrl: "",
      clickAmount: 0,
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/api/clicks");
        setUrlList(response.data.UrlObject);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(`${error.response?.data.msg || error.message}`);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <TableContainer>
      <ToastContainer
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
      <TableHeader>
        <TableRow>
          <TableTitle>URL Original</TableTitle>
          <TableTitle>Minilink</TableTitle>
          <TableTitle>Qtd de Clicks</TableTitle>
        </TableRow>
      </TableHeader>
      <TableBody>
        {urlList.map((url, index) => (
          <TableRow key={index}>
            <TableCell>
                <TableLink>{url.originalUrl}</TableLink> 
            </TableCell>
            <TableCell>
                <TableLink href={originRedirectUrl+url.shortUrl} target="_blank" rel="noopener noreferrer">{url.shortUrl}</TableLink> 
            </TableCell>
            <TableCell>
                <TableLink>{url.clickAmount}</TableLink> 
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default Table;
