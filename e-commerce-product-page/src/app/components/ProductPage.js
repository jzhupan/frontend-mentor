import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import product1 from "../assets/image-product-1.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductPage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: 2,
        p: 2,
        minHeight: 600,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Item sx={{ width: 400, height: 400, margin: 2 }}>
            <Box
              sx={{
                position: "relative",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                alignContent: "center",
              }}
            >
              <Image src={product1} alt="product-1" fill center />
            </Box>
          </Item>
          <Item sx={{ width: 400, height: 100, margin: 2 }}>
            Product carousel
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item sx={{ width: 600, height: 400, marginTop: 8 }}>
            Product Description
          </Item>
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
    </Box>
  );
};

export default ProductPage;
