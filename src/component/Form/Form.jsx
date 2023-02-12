import { useState } from "react";
import InputFile from "./InputFile";
import InputForm from "./InputForm";
import TextArea from "./TextArea";
import Modal from "../Modal";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    link: "",
    cv: "",
    cover: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="container m-auto px-32 py-8 mb-14">
      <form className="bg-white-100 px-8 py-12 rounded-xl">
        <h4 className="text-[32px] font-medium pb-8">Apply For The Job</h4>

        <div className="space-y-5">
          <div className="flex gap-8">
            <InputForm
              name="name"
              value={values.name}
              handleOnChange={handleChange}
              placeholder="Full Name"
              type="text"
            />
            <InputForm
              name="email"
              value={values.email}
              handleOnChange={handleChange}
              placeholder="Email Address"
              type="text"
            />
          </div>

          <InputForm
            name="link"
            value={values.link}
            handleOnChange={handleChange}
            placeholder="Website or Portfolio Link"
            type="text"
          />

          <InputFile name="cv" value={values.cv} handleOnChange={handleChange} placeholder="Upload Your CV" />

          <TextArea
            name="cover"
            value={values.cover}
            handleOnChange={handleChange}
            label=""
            placeholder="Cover Letter"
            type="text"
          />

          <button
            onClick={() => setIsOpen(true)}
            disabled={isOpen}
            type="button"
            className="bg-violet-500 w-full h-[53px] text-white-100 rounded-md disabled:bg-violet-100"
          >
            Apply Now
          </button>
        </div>
      </form>

      <Modal isOpen={isOpen} setOpen={() => setIsOpen(false)}>
        <div className="space-y-2 flex items-center flex-col h-full pt-12">
          <div className="bg-white-100 w-[96px] h-[96px] flex_center rounded-xl mb-4">
            <svg width="55" height="43" viewBox="0 0 55 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.16675 21.5L21.4167 39.75L51.8334 3.25"
                stroke="url(#paint0_linear_59_91)"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_59_91"
                  x1="27.5001"
                  y1="3.25"
                  x2="27.5001"
                  y2="39.75"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2A2AD1" />
                  <stop offset="1" stop-color="#00FF85" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="text-[24px]">Apply Job Success</p>
          <p style={{ color: "#333333" }}>I hope you are lucky</p>
        </div>
      </Modal>
    </div>
  );
};

export default Form;
