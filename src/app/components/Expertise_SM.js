import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import CardStyle from "./CardStyle";
import Image from 'react-bootstrap/Image';

export default function Expertise_SM() {
  const expertise = [
    { 
      expertise_img:"/images/about-us/about-us1.jpg",
      name: 'Innovation',
      paragraph:'Innovation is at the core of everything we do at Beryl Technologies Ltd. Our dedicated team of experts relentlessly pursues breakthrough ideas and solutions to address complex challenges. By fostering a culture of creativity and continuous learning, we encourage our employees to think outside the box and push boundaries. This commitment to innovation sets us apart and drives our success in empowering the future.- With 5 years of experience, we help businesses with customize solutions,'
    },
    { 
      expertise_img:'/images/about-us/about-us2.jpg',
      name: 'Strategic Partnerships',
      paragraph:'Collaboration is key to our success. We forge strategic partnerships with industry leaders, research institutions, and startups to leverage collective expertise and resources. Through these collaborations, we share knowledge and accelerate the development of cutting-edge solutions. By working together, we create a collaborative ecosystem that fosters growth, drives industry standards, and propels us towards a future of endless possibilities.' 
    },
    { 
      expertise_img:"/images/about-us/about-us3.jpg",
      name: 'Customer-Centric Approach' ,
      paragraph:'At Beryl Technologies Ltd, our customers are at the heart of everything we do. We believe in delivering tailored solutions that address their unique needs and challenges. By deeply understanding our customers requirements, we develop innovative products and services that exceed expectations. Our commitment to exceptional customer experiences drives our success and fosters long-term partnerships built on trust, reliability, and mutual growth.'
    },
    { 
      expertise_img:"/images/about-us/about-us4.jpg",
      name: 'Sustainable Innovation' ,
      paragraph:'We recognize the importance of sustainable innovation in creating a better future. At Beryl Technologies Ltd, we integrate sustainable practices into our research, development, and operations. By prioritizing eco-friendly solutions, we contribute to a greener and more sustainable world. Through our commitment to sustainable innovation, we aim to inspire others and drive positive change, ensuring a better future for generations to come.'
    },
  ];

  return (
    <Stack
      direction="column"
      spacing={2}
    >
      {expertise.map((item, index) => (
        <CardStyle key={index} data-aos-delay={`${index * 0.2}s`} data-aos="fade-up">
          <Typography variant="h6" style={{ color: 'white', marginBottom: "10px"}}>
            {item.name}
          </Typography>
          <Image
            src={item.expertise_img}
            alt={item.name}
            className="w-full h-auto rounded-md"
          />
          <Typography variant="body1" style={{ color: 'white'}}>
            {item.paragraph}
          </Typography>
        </CardStyle>
      ))}
    </Stack>
  );
}
