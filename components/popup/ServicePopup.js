import { context } from "@/context/context";
import { useContext } from "react";
import PopContainer from "./PopupContainer";
import { PortableText } from "next-sanity";
import { urlForImage } from "@/sanity/lib/utils";
import { Image } from "next-sanity/image";

const ServicePopup = () => {
  const { serviceModal, setServiceModal } = useContext(context);
  const imageUrl = urlForImage(serviceModal?.logo);
  console.log(imageUrl)
  return (
    <PopContainer nullValue={setServiceModal}>
      <div className="popup_informations">
        <div className="image">
          <Image 
            src={imageUrl.url()} 
            alt=""
            width="0"
            height="0" />
          <div
            className="main"
            data-img-url={imageUrl.url()}
            style={{ backgroundImage: `url(${imageUrl.url()})` }}
          />
        </div>
        <div className="title">
          <h3>{serviceModal.label}</h3>
        </div>
        <div class="description">
          <PortableText value={serviceModal.content} />
        </div>
      </div>
    </PopContainer>
  );
};
export default ServicePopup;
