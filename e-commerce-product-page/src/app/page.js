"use client";
import Image from "next/image";
import styles from "./page.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ProductPage from "./components/ProductPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
            <ResponsiveAppBar />
            <ProductPage />
          </Box>
        </Container>
      </div>
    </main>
  );
}
