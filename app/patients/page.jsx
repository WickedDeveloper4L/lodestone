import styles from "./patients.module.scss";
import React from "react";
import image2 from "../assets/pexels-mart-production-7089392.jpg";
import image3 from "../assets/pexels-yunus-tuğ-14580770.jpg";
import image4 from "../assets/pexels-evg-kowalievska-1170979.jpg";
import Image from "next/image";
import ListItem from "@/components/list/ListItem";
import FindCenter from "@/components/findCenter/FindCenter";
import TestimonialText from "@/components/testimonialText/TestimonialText";

export const metadata = {
  title: "Lodestone patients",
  description: "Life, care.",
};

const PatientsPage = () => {
  return (
    <div className={styles.patients}>
      <div className={styles.heading}>
        <h1>Your Patient Journey</h1>
      </div>
      <div className={styles.carousel}>
        <Image width={200} height={200} src={image2} alt="patient care" />
        <Image width={200} height={200} src={image3} alt="patient care" />
        <Image width={200} height={200} src={image4} alt="patient care" />
      </div>
      <div className={styles.list}>
        <div className={styles.items}>
          <div>
            <ListItem
              heading={"Referral"}
              number={1}
              content={
                "Your doctor or clinician sends your imaging referral to Lodestone Patient Care Limited."
              }
            />
          </div>

          <div>
            <ListItem
              heading={"Authorisation"}
              number={2}
              content={
                "Your referral is reviewed by clinical staff and verified. We may contact you with further questions."
              }
            />
          </div>

          <div>
            <ListItem
              heading={"Booking"}
              number={3}
              content={
                "BookingOur Bookings team contacts you by telephone or letter.A suitable appointment is then booked for you giving you a choice of location, date and time.We will then send you confirmation and an appointment information pack by post or via e-mail if available.The Bookings Team can also assist you with any queries.We will offer you the choice of an e-mail or SMS reminder service."
              }
            />
          </div>

          <div>
            <ListItem
              heading={"Imaging"}
              number={4}
              content={
                "You attend the clinic and confirm your registration details.Throughout your appointment a member of the scanning team will remain with you and can answer any of your questions.Preparation for the examination depends on the type of scan but may include changing into a gown, having an injection and being asked to rest.Details on the specific preparation for each type of scan can be found here.The diagnostic imaging is then completed, after which you can get changed (if required) and any discharge information is given to you."
              }
            />
          </div>

          <div>
            <ListItem
              heading={"Reporting"}
              number={5}
              content={
                "If a clinical report has been requested as part of the service, your images will be shared with an appointed Consultant Reporter. They will review your images and write a report on their findings."
              }
            />
          </div>

          <div>
            <ListItem
              heading={"Results"}
              number={6}
              content={
                "Once reported the results will be sent back to your referring clinician so that they can contact you should any further follow up or treatment be required."
              }
            />
          </div>
        </div>
      </div>
      <div>
        <FindCenter />
      </div>
      <div className={styles.testimonials}>
        <TestimonialText />
        <TestimonialText />
      </div>
    </div>
  );
};

export default PatientsPage;
