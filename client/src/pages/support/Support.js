import "./Support.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Button } from "@mui/material";
import { useState } from "react";

const Support = () => {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <div className="supportMainContainer">
      <div className="support-first-section">
        <h3>How can we help ?</h3>
        <p>
          You can find all of the questions and answers about secure your
          account
        </p>
      </div>
      <hr />
      <div className="support-third-section">
        <div className="support-third-section-1">
          <div className="support-third-section-1--1">
            <div
              onClick={() => setIsFilled(!isFilled)}
              style={{ cursor: "pointer" }}
            >
              {isFilled ? (
                <RadioButtonCheckedIcon
                  style={{ color: "#4CAF4F" }}
                  fontSize="small"
                />
              ) : (
                <RadioButtonUncheckedIcon
                  style={{ color: "#4CAF4F" }}
                  fontSize="small"
                />
              )}
            </div>
            <p>A general enquiry</p>
          </div>
          <div className="support-third-section-1--1">
            <div
              onClick={() => setIsFilled(!isFilled)}
              style={{ cursor: "pointer" }}
            >
              {isFilled ? (
                <RadioButtonCheckedIcon
                  style={{ color: "#4CAF4F" }}
                  fontSize="small"
                />
              ) : (
                <RadioButtonUncheckedIcon
                  style={{ color: "#4CAF4F" }}
                  fontSize="small"
                />
              )}
            </div>
            <p>I have a problem need help</p>
          </div>
        </div>
        <div className="support-third-section-2">
          <div>
            <label htmlFor="">Category</label>
            <select name="" id=""></select>
          </div>
          <div>
            <label htmlFor="">Priority</label>
            <select name="" id=""></select>
          </div>
        </div>
        <div className="support-third-section-3">
          <h4 htmlFor="">Describe the problem you have</h4>
          <textarea
            placeholder="Write your problem ... "
            name=""
            id=""
          ></textarea>
        </div>
        <div className="support-third-section-4">
          <h4>Give us the details</h4>
          <p>
            If you’re experiencing a personal crisis, are unable to cope and
            need support send message. We will always try to respond to texters
            as quickly as possible.
          </p>
          <textarea placeholder="write your message" name="" id=""></textarea>
        </div>
        <div className="support-third-section-5">
          <Button className="supportSendButton">Send</Button>
          <Button className="supportCancelButton">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default Support;
