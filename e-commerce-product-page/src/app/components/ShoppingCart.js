import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const ShoppingCart = () => {
  return (
    <IconButton
      aria-label="cart"
      sx={{
        color: "black",
        width: "50px",
        height: "50px",
        marginRight: "20px",
        borderRadius: "none",
      }}
    >
      <StyledBadge badgeContent={4} color="warning">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default ShoppingCart;
