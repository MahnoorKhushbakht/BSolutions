import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


function CardStyle({ children }) {
  return (
    <Card
      variant="outlined"
      data-aos='fade-down'
      sx={{
        flexGrow: 1,
        backgroundColor: 'transparent',
        color:'white',
        border:'none',
        width: '100%',
        display:'flex',
        textJustify:'center'
      }}

    >
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

export default CardStyle;
