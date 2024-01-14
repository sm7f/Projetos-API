import {Cloudinary} from "@cloudinary/url-gen";

const Cloud = () => {
  const cld = new Cloudinary({cloud: {cloudName: 'dnf64htdf'}});
};

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg.",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });