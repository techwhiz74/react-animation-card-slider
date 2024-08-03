import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import { states } from "../../data/States";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { GoogleReCaptcha, useGoogleReCaptcha } from "react-google-recaptcha-v3";

const referrals = ["CURBED.COM", "EBLAST", "EVENTS", "NEWSPAPERS/MEGAZINE", "NY TIMES.COM", "ONLINE SEARCH", "REAL DEAL", "REFERRAL", "SITE SIGNAGE"]

function ContactForm() {
  const { i18n, t } = useTranslation();
  const { countries } = useCountries();
  const [isBroker, setIsBroker] = useState(false);
  const [ token, setToken ] = useState()
  const { executeRecaptcha } = useGoogleReCaptcha();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      state: "",
      city: "",
      zip: "",
      country: "",
      phone: "",
      referral: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, t("form.placeholder.min_value"))
        .max(20, t("form.placeholder.max_value"))
        .required(t("form.placeholder.required")),
      lastName: Yup.string()
        .min(3, t("form.placeholder.min_value"))
        .max(20, t("form.placeholder.max_value"))
        .required(t("form.placeholder.required")),
      email: Yup.string()
        .email("Invalid email address")
        .required(t("form.placeholder.required")),
      address: Yup.string()
        .min(3, t("form.placeholder.min_value"))
        .max(20, t("form.placeholder.max_value"))
        .required(t("form.placeholder.required")),
      state: Yup.string()
        .required(t("form.placeholder.required")),
      city: Yup.string()
        .required(t("form.placeholder.required")),
      zip: Yup.string()
        .required(t("form.placeholder.required")),
      phone: Yup.string()
        .min(3, t("form.placeholder.min_value"))
        .max(20, t("form.placeholder.max_value"))
        .required(t("form.placeholder.required")),
      referral: Yup.string()
        .required(t("form.placeholder.required")),
    }),
  });

  const submitHandler = (e) => {
    e.preventDefault();
    executeRecaptcha("action")
    if (formik.isValid) {
      console.log(isBroker)
    }
  }

  return (
    <form onSubmit={submitHandler} className="w-full xl:max-w-[600px] mx-auto p-8 text-white">
      <h3 className="text-center text-white">{t("form.name.register")}</h3>
      <p className="text-[13px] mt-5 text-center mb-2">
        {t("form.name.required_fields")}
      </p>
      <div className="flex">
        <div className="input_group mb-5 relative flex-1">
          <input
            type="text"
            name="firstName"
            {...formik.getFieldProps("firstName")}
            className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
            placeholder={t("form.placeholder.first_name")}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="min-h-[20px] absolute start-0 top-[88%] text-sm text-[#ff0000]">
              {formik.errors.firstName}
            </div>
          )}
        </div>

        <div className="input_group mb-5 relative w-1/2">
          <input
            type="text"
            name="lastName"
            {...formik.getFieldProps("lastName")}
            className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
            placeholder={t("form.placeholder.last_name")}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="min-h-[20px] absolute start-0 top-[88%] text-sm text-[#ff0000]">
              {formik.errors.lastName}
            </div>
          )}
        </div>
      </div>

      <div className="input_group mb-5 relative">
        <input
          type="text"
          name="address"
          {...formik.getFieldProps("address")}
          className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
          placeholder={t("form.placeholder.address")}
        />
        {formik.touched.address && formik.errors.address && (
          <div className="min-h-[20px] absolute start-0 top-[88%] text-sm text-[#ff0000]">
            {formik.errors.address}
          </div>
        )}
      </div>

      <div className="input_group mb-5 relative">
        <div className="custom_select">
          <Select
            {...formik.getFieldProps("state")}
            label={t("form.placeholder.state")}
            onChange={value => { formik.setValues({ ...formik.values, state: value }) }}
            className="bg-[#8E8F90] !border-none !outline-none shadow-none w-full text-[13px] h-9 !text-white p-[5px_10px] mb-2 placeholder:text-white"
          >
            {states.map((state) => (
              <Option value={state} key={state}>{state}</Option>
            ))}
          </Select>
        </div>
        {formik.touched.state && formik.errors.state && (
          <div className="min-h-[20px] absolute start-0 top-[88%] text-sm text-[#ff0000]">
            {formik.errors.state}
          </div>
        )}
      </div>

      <div className="flex">
        <div className="input_group mb-5 relative flex-1">
          <input
            type="text"
            {...formik.getFieldProps("city")}
            name="city"
            className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
            placeholder={t("form.placeholder.city")}
          />
          {formik.touched.city && formik.errors.city && (
            <div className="min-h-[20px] absolute start-0 top-[88%] text-sm text-[#ff0000]">
              {formik.errors.city}
            </div>
          )}
        </div>
        <div className="input_group mb-5 relative w-[130px]">
          <input
            type="text"
            {...formik.getFieldProps("zip")}
            name="zip"
            className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
            placeholder={t("form.placeholder.zip")}
          />
          {formik.touched.zip && formik.errors.zip && (
            <div className="min-h-[20px] absolute start-0 top-[88%] text-sm text-[#ff0000]">
              {formik.errors.zip}
            </div>
          )}
        </div>
      </div>

      <div className="input_group mb-5 relative">
        <div className="custom_select">
          <Select
            {...formik.getFieldProps("country")}
            label={t("form.placeholder.country")}
            className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
            onChange={value => { formik.setValues({ ...formik.values, country: value }) }}
            selected={(element) =>
              element &&
              React.cloneElement(element, {
                disabled: true,
                className:
                  "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
              })
            }
          >
            {countries.map(({ name, flags }) => (
              <Option
                key={name}
                value={name}
                className="flex items-center gap-2"
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name}
              </Option>
            ))}
          </Select>
          {formik.touched.country && formik.errors.country && (
            <div className="min-h-[20px] absolute start-0 top-[88%] text-sm text-[#ff0000]">
              {formik.errors.country}
            </div>
          )}
        </div>
      </div>

      <div className="input_group mb-5 relative">
        <input
          {...formik.getFieldProps("email")}
          type="email"
          name="email"
          className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
          placeholder={t("form.placeholder.email")}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="min-h-[20px] absolute start-0 top-[88%] text-sm text-[#ff0000]">
            {formik.errors.email}
          </div>
        )}
      </div>

      <div className="flex">
        <div className="input_group mb-5 relative flex-1">
          <input
            {...formik.getFieldProps("phone")}
            type="number"
            name="phone"
            className="bg-[#8E8F90] border-none outline-none w-full text-[13px] h-9  text-white p-[5px_10px] mb-2 placeholder:text-white"
            placeholder={t("form.placeholder.number")}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="min-h-[20px] absolute start-0 top-[88%] text-sm text-[#ff0000]">
              {formik.errors.phone}
            </div>
          )}
        </div>

        <div className="input_group mb-5 relative w-1/2">
          <div className="custom_select">
            <Select
              label={t("form.placeholder.hear_about")}
              {...formik.getFieldProps("referral")}
              onChange={value => formik.setValues({ ...formik.values, referral: value })}
              className="bg-[#8E8F90] !border-none !outline-none shadow-none w-full text-[13px] h-9  !text-white p-[5px_10px] mb-2 placeholder:text-white"
            >
              {
                referrals.map((item, key) => (
                  <Option key={key} value={item}>{item}</Option>
                ))
              }
            </Select>
          </div>
          {formik.touched.referral && formik.errors.referral && (
            <div className="min-h-[20px] absolute start-0 top-[88%] text-sm text-[#ff0000]">
              {formik.errors.referral}
            </div>
          )}
        </div>

      </div>

      <div className="input_group mb-5 relative">
        <div className="flex items-center justify-between">
          <span className="text-sm">{t("form.name.broker")}</span>
          <div className="flex items-center">
            <div className="mx-3">
              <input type="radio" onClick={() => setIsBroker(true)} name="broker" value="broker_yes" />
              <label htmlFor="broker_yes" className="text-sm ms-1">
                {t("form.name.yes")}
              </label>
            </div>
            <div className="">
              <input defaultChecked={true} type="radio" onClick={(e) => setIsBroker(false)} name="broker" value="broker_no" />
              <label htmlFor="broker_no" className="text-sm ms-1">
                {t("form.name.no")}
              </label>
            </div>
          </div>
        </div>
      </div>

      <GoogleReCaptcha
        refreshReCaptcha={true}
        action="action"
        onVerify={token => {
          setToken(token)
        }}
      />

      <div className="input_group mb-5 relative text-center mt-6 ">
        <button className="inline-block p-[8px_20px] transition-colors text-sm bg-white hover:bg-primary-2 text-black hover:text-white">
          {t("form.name.submit")}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
