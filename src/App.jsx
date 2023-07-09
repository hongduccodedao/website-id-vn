import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import backGround from "./assets/background.png";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const App = () => {
  const handleClickDownload = () => {
    const link = document.createElement("a");
    link.download = `Nguyễn_Hồng_Đức_CV.pdf`;
    link.href = "./Nguyễn_Hồng_Đức_CV.pdf";
    link.click();
  };

  return (
    <Box sx={{
      maxHeight: '100vh',
      minHeight: '100vh',
    }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          backgroundImage: `url(${backGround})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: {
              xs: "100vw",
              md: "40vw",
            },
            height: "100vh",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              marginBottom: 5,
            }}
          >
            <Avatar
              alt="hongduccodedao"
              src="https://avatars.githubusercontent.com/u/73995275?v=4"
              sx={{ width: 150, height: 150 }}
            />
            <Typography variant="h5" component="h5" sx={{ color: "white" }}>
              @hongduccodedao
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ color: "white", textAlign: "center" }}
            >
              Hello everyone! I am Nguyen Hong Duc. I am a Front-End Developer
              (React.JS)
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "100%",
              }}
              onClick={handleClickDownload}
              startIcon={<FileDownloadIcon />}
            >
              Download My CV
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "100%",
              }}
              href="https://hongduccodedao.site/"
              startIcon={<AutoAwesomeIcon />}
            >
              Portfolio
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "100%",
              }}
              href="https://www.facebook.com/hongduccodedao/"
              startIcon={<FaFacebook />}
            >
              Facebook
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "100%",
              }}
              href="https://github.com/hongduccodedao"
              startIcon={<FaGithub />}
            >
              Github
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "100%",
              }}
              href="https://www.instagram.com/pinkduwc._/"
              startIcon={<FaInstagram />}
            >
              Instagram
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "100%",
              }}
              href="https://www.linkedin.com/in/hongduccodedao/"
              startIcon={<FaLinkedin />}
            >
              Linkedin
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "100%",
              }}
              href="https://discord.com/users/769244837030526976"
              startIcon={<FaDiscord />}
            >
              Discord
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
