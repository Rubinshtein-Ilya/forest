import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect, useId } from "react";
import ReactDOMServer from "react-dom/server";
import copy from "clipboard-copy";
import { message } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode, Thumbs } from "swiper/modules";
import { parse, isValid, format, differenceInDays } from "date-fns";
import ru from "date-fns/locale/ru";
import dynamic from "next/dynamic.js";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { IMaskInput } from "react-imask";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
const logo = "/icons/logo.svg";
const phone = "/icons/phone.svg";
const wa = "/icons/wa.svg";
const tg = "/icons/tg.svg";
const mail = "/icons/mail.svg";
const inst = "/icons/inst.svg";
const vk = "/icons/vk.svg";
const phoneFooter = "/icons/phone-footer.svg";
const waFooter = "/icons/wa-footer.svg";
const tgFooter = "/icons/tg-footer.svg";
const vkSend = "/icons/vk-send.svg";
function Icon(props) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    props === "phone" && /* @__PURE__ */ jsx("a", { href: "tel:+79226152393", className: "social social-phone", children: /* @__PURE__ */ jsx("img", { src: phone, alt: "phone" }) }),
    props === "tg" && /* @__PURE__ */ jsx("a", { href: "https://t.me/@MaryBoyarskikh", className: "social social-tg", children: /* @__PURE__ */ jsx("img", { src: tg, alt: "telegram" }) }),
    props === "tg-footer" && /* @__PURE__ */ jsx("a", { href: "https://t.me/@MaryBoyarskikh", className: "social social-tg", children: /* @__PURE__ */ jsx("img", { src: tgFooter, alt: "telegram" }) }),
    props === "wa" && /* @__PURE__ */ jsx("a", { href: "https://wa.me/+79226152393", className: "social social-wa", children: /* @__PURE__ */ jsx("img", { src: wa, alt: "whatsapp" }) }),
    props === "wa-footer" && /* @__PURE__ */ jsx("a", { href: "https://wa.me/+79226152393", className: "social social-wa", children: /* @__PURE__ */ jsx("img", { src: waFooter, alt: "whatsapp" }) }),
    props === "mail" && /* @__PURE__ */ jsx("a", { href: "mailto:vremya.lesa@mail.ru", className: "social social-mail", children: /* @__PURE__ */ jsx("img", { src: mail, alt: "mail" }) }),
    props === "inst" && /* @__PURE__ */ jsx("a", { href: "#", className: "social social-inst", children: /* @__PURE__ */ jsx("img", { src: inst, alt: "inst" }) }),
    props === "vk" && /* @__PURE__ */ jsx("a", { href: "#", className: "social social-vk", children: /* @__PURE__ */ jsx("img", { src: vk, alt: "vk" }) }),
    props === "vk-send" && /* @__PURE__ */ jsx("a", { href: "#", className: "social social-vk", children: /* @__PURE__ */ jsx("img", { src: vkSend, alt: "vk" }) }),
    props === "phone-footer" && /* @__PURE__ */ jsx("a", { href: "tel:+79226152393", className: "social social-phone", children: /* @__PURE__ */ jsx("img", { src: phoneFooter, alt: "phone" }) })
  ] });
}
function Header() {
  useState(0);
  const [showMenuBurger, setShowMenuBurger] = useState(false);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("header", { className: "header", id: "header", children: [
    showMenuBurger && /* @__PURE__ */ jsx("div", { className: "overlay", onClick: () => setShowMenuBurger("") }),
    /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("nav", { className: `menu-768 ${showMenuBurger}`, children: [
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#home", onClick: () => setShowMenuBurger(""), children: "О доме" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#prices", onClick: () => setShowMenuBurger(""), children: "Цена" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#location", onClick: () => setShowMenuBurger(""), children: "О локации" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "#location__found",
              onClick: () => setShowMenuBurger(""),
              children: "Как добраться"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#exclusive", onClick: () => setShowMenuBurger(""), children: "Дополнительные услуги" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#footer", onClick: () => setShowMenuBurger(""), children: "Контакты" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "menu-768__right", children: [
          /* @__PURE__ */ jsxs("div", { className: "menu-768__contact", children: [
            /* @__PURE__ */ jsx("p", { children: "Свяжитесь с нами прямо сейчас!" }),
            /* @__PURE__ */ jsxs("div", { className: "menu-768__icons", children: [
              Icon("phone"),
              Icon("tg"),
              Icon("wa")
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "menu-768__socials", children: [
            /* @__PURE__ */ jsx("p", { children: "Мы в социальных сетях:" }),
            /* @__PURE__ */ jsxs("div", { className: "menu-768__items", children: [
              Icon("inst"),
              Icon("vk-send")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "menu-768__close",
            onClick: () => setShowMenuBurger(""),
            children: /* @__PURE__ */ jsxs(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M18 6L6 18",
                      stroke: "#AFAFAF",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M6 6L18 18",
                      stroke: "#AFAFAF",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  )
                ]
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "header__wrapper", children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "logo", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "logo" }) }),
        /* @__PURE__ */ jsx("nav", { className: "menu", children: /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#home", children: "О доме" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#prices", children: "Цена" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#location", children: "О локации" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#location__found", children: "Как добраться" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#exclusive", children: "Дополнительные услуги" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#footer", children: "Контакты" }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "socials", children: [
          Icon("phone"),
          Icon("tg"),
          Icon("wa")
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "burger",
            onClick: () => {
              setShowMenuBurger("active");
            },
            children: [
              /* @__PURE__ */ jsx("span", {}),
              /* @__PURE__ */ jsx("span", {}),
              /* @__PURE__ */ jsx("span", {})
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const Subtitle = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("h3", { className: `${props.addClass} subtitle`, children: props.children }) });
};
const map = "/icons/map.svg";
const copyIcon = "/icons/copy.svg";
const Promo = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = (text) => {
    copy(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2e3);
    event.stopPropagation();
  };
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Координаты скопированы"
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "promo", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "promo__wrapper", children: [
    /* @__PURE__ */ jsxs("div", { className: "promo__relaxation", children: [
      /* @__PURE__ */ jsx("h1", { className: "title", children: "Отдых в объятиях природы" }),
      /* @__PURE__ */ jsx(Subtitle, { addClass: "promo__subtitle", children: "уютный уголок для спокойного отдыха рядом с Екатеринбургом" }),
      /* @__PURE__ */ jsxs("div", { className: "promo__texts", children: [
        /* @__PURE__ */ jsx("p", { className: "text promo__text wrap-text", children: "Добро пожаловать в уникальное убежище комфорта и роскоши – наш загородный дом, где каждый момент наполнен удивительной гармонией." }),
        /* @__PURE__ */ jsx("p", { className: "text promo__text", children: "Наш уединённый дом расположен в тихом уголке рядом с озером Шитовское и окружен красивыми лесами." }),
        /* @__PURE__ */ jsx("p", { className: "text promo__text", children: "Забронируйте уже сегодня и сделайте ваш отдых незабываемым!" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "promo__geo", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://yandex.ru/maps/org/vremya_lesa/191238425384/?from=mapframe&ll=60.600641%2C57.122401&z=10",
            className: "promo__geo-link",
            target: "_blank",
            children: [
              /* @__PURE__ */ jsx("img", { src: map, alt: "map" }),
              /* @__PURE__ */ jsx("div", { className: "promo__geo-coordinates", children: "57.122785 60.511281" })
            ]
          }
        ),
        contextHolder,
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "promo__copy",
            onClick: (event2) => {
              event2.preventDefault();
              event2.stopPropagation();
              copyToClipboard("57.122785 60.511281");
              success();
            },
            children: /* @__PURE__ */ jsx("img", { src: copyIcon, alt: "copy" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "promo__swiper", children: [
      /* @__PURE__ */ jsxs("div", { className: "promo__cutout", children: [
        /* @__PURE__ */ jsx("div", { className: "promo__corner-one", children: /* @__PURE__ */ jsx(
          "svg",
          {
            width: "29",
            height: "30",
            viewBox: "0 0 12 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.0511755 0H0V11H12V10.8784C11.9998 10.8781 11.9996 10.8779 11.9994 10.8776C5.75043 10.8776 0.617095 6.10115 0.0511755 0Z",
                fill: "#232221"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "promo__corner-two", children: /* @__PURE__ */ jsx(
          "svg",
          {
            width: "29",
            height: "30",
            viewBox: "0 0 12 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.0511755 0H0V11H12V10.8784C11.9998 10.8781 11.9996 10.8779 11.9994 10.8776C5.75043 10.8776 0.617095 6.10115 0.0511755 0Z",
                fill: "#232221"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx("a", { href: "#home", className: "promo__arrow", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            width: "56",
            height: "56",
            viewBox: "0 0 56 56",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M16.332 16.3359H39.6654V39.6693",
                  stroke: "#232221",
                  strokeWidth: "4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M16.332 39.6693L39.6654 16.3359",
                  stroke: "#232221",
                  strokeWidth: "4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs(
        Swiper,
        {
          modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
          spaceBetween: 50,
          slidesPerView: 1,
          pagination: {
            clickable: true
          },
          autoplay: { delay: 5e3 },
          scrollbar: false,
          breakpoints: {
            1387: {
              spaceBetween: 50,
              slidesPerView: 1,
              direction: "vertical"
            },
            1386: {
              spaceBetween: 50,
              slidesPerView: 1,
              direction: "horizontal"
            }
            // 980: {
            // 	direction: 'horizontal',
            // },
          },
          navigation: {
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button"
          },
          children: [
            /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("img", { src: "/images/swiper-promo/slide1.jpeg", alt: "slide1" }) }),
            /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("img", { src: "/images/swiper-promo/slide2.jpeg", alt: "slide2" }) }),
            /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("img", { src: "/images/swiper-promo/slide3.jpeg", alt: "slide3" }) }),
            /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("img", { src: "/images/swiper-promo/slide4.jpeg", alt: "slide4" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "promo__navigation", children: [
        /* @__PURE__ */ jsx("button", { className: "custom-prev-button", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "26",
            viewBox: "0 0 12 26",
            fill: "none",
            children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M5.29289 0.292893C5.68342 -0.0976311 6.31658 -0.0976311 6.70711 0.292893L10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711C10.3166 6.09763 9.68342 6.09763 9.29289 5.70711L6 2.41421L2.70711 5.70711C2.31658 6.09763 1.68342 6.09763 1.29289 5.70711C0.902369 5.31658 0.902369 4.68342 1.29289 4.29289L5.29289 0.292893Z",
                  fill: "#F7FDFB"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M6 4C6.55228 4 7 4.44772 7 5L7 25C7 25.5523 6.55228 26 6 26C5.44772 26 5 25.5523 5 25L5 5C5 4.44772 5.44772 4 6 4Z",
                  fill: "#F7FDFB"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("button", { className: "custom-next-button", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "26",
            viewBox: "0 0 12 26",
            fill: "none",
            children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M5.29289 25.7071C5.68342 26.0976 6.31658 26.0976 6.70711 25.7071L10.7071 21.7071C11.0976 21.3166 11.0976 20.6834 10.7071 20.2929C10.3166 19.9024 9.68342 19.9024 9.29289 20.2929L6 23.5858L2.70711 20.2929C2.31658 19.9024 1.68342 19.9024 1.29289 20.2929C0.902369 20.6834 0.902369 21.3166 1.29289 21.7071L5.29289 25.7071Z",
                  fill: "#232221"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M6 22C6.55228 22 7 21.5523 7 21L7 1C7 0.447716 6.55228 0 6 0C5.44772 0 5 0.447716 5 1L5 21C5 21.5523 5.44772 22 6 22Z",
                  fill: "#232221"
                }
              )
            ]
          }
        ) })
      ] })
    ] })
  ] }) }) }) });
};
const Overlay = ({ onClick }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "overlay", onClick }) });
};
const errorImage = "/icons/error.svg";
const DynamicDatePicker = dynamic(() => import("react-datepicker"), {
  ssr: false
});
const DatePicker = ({ onSubmitCallback, initialDates }) => {
  const schema = yup.object().shape({
    startDate: yup.string().required("Обязательно для ввода").test(
      "is-future-date",
      "Дата въезда не может быть в прошлом",
      function(value) {
        const startDate2 = parse(value, "dd-MM-yyyy", /* @__PURE__ */ new Date());
        return isValid(startDate2) && startDate2 >= /* @__PURE__ */ new Date();
      }
    ),
    endDate: yup.string().required("Обязательно для ввода")
  });
  const [startDate, setStartDate] = useState(
    initialDates.initialStartDate || null
  );
  const [endDate, setEndDate] = useState(initialDates.initialEndDate || null);
  const [startFormattedDate, setStartFormattedDate] = useState("");
  const [endFormattedDate, setEndFormattedDate] = useState("");
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setValue("startDate", start ? format(start, "dd-MM-yyyy") : null);
    setValue("endDate", end ? format(end, "dd-MM-yyyy") : null);
    updateFormattedDates(start, end);
  };
  const onSubmit = (data) => {
    onSubmitCallback({ startDate, endDate });
  };
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors
  } = useForm({
    defaultValues: {
      startDate: null,
      endDate: null
    },
    resolver: yupResolver(schema)
  });
  const handleResetDates = () => {
    setStartDate(null);
    setEndDate(null);
    setValue("startDate", null);
    setValue("endDate", null);
    setStartFormattedDate("");
    setEndFormattedDate("");
    clearErrors();
  };
  const getNightLabel = () => {
    const selectedDaysCount = startDate && endDate ? differenceInDays(endDate, startDate) : "";
    if (selectedDaysCount === 0) {
      return /* @__PURE__ */ jsx("div", { className: "date-picker__title", children: "Ночей нет" });
    }
    const lastDigit = selectedDaysCount % 10;
    if (selectedDaysCount > 10 && selectedDaysCount < 20) {
      return /* @__PURE__ */ jsxs("div", { className: "date-picker__title", children: [
        selectedDaysCount,
        " ночей"
      ] });
    }
    if (lastDigit === 1) {
      return /* @__PURE__ */ jsxs("div", { className: "date-picker__title", children: [
        selectedDaysCount,
        " ночь"
      ] });
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
      return /* @__PURE__ */ jsxs("div", { className: "date-picker__title", children: [
        selectedDaysCount,
        " ночи"
      ] });
    }
    return /* @__PURE__ */ jsxs("div", { className: "date-picker__title", children: [
      selectedDaysCount,
      " ночей"
    ] });
  };
  const updateFormattedDates = (startDate2, endDate2) => {
    clearErrors();
    if (startDate2 && endDate2) {
      const formattedStartDate = format(startDate2, "dd MMM yyyy г.", {
        locale: ru
      });
      const formattedEndDate = format(endDate2, "dd MMM yyyy г.", { locale: ru });
      setStartFormattedDate(formattedStartDate);
      setEndFormattedDate(formattedEndDate);
    } else {
      setStartFormattedDate("");
      setEndFormattedDate("");
    }
  };
  return /* @__PURE__ */ jsxs("form", { className: "date-picker__wrapper", onSubmit: handleSubmit(onSubmit), children: [
    /* @__PURE__ */ jsxs("div", { className: "date-picker__top", children: [
      endDate && startDate ? /* @__PURE__ */ jsxs("div", { className: "date-picker__period", children: [
        /* @__PURE__ */ jsx("h3", { className: "date-picker__title", children: getNightLabel() }),
        /* @__PURE__ */ jsxs("div", { className: "date-picker__dates", children: [
          startFormattedDate,
          " - ",
          endFormattedDate
        ] })
      ] }) : /* @__PURE__ */ jsxs("h3", { className: "date-picker__title", children: [
        "Выберите даты ",
        /* @__PURE__ */ jsx("br", {}),
        " планируемого отдыха"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "date-picker__inputs", children: [
        /* @__PURE__ */ jsx(
          Controller,
          {
            name: "startDate",
            control,
            render: ({ field }) => /* @__PURE__ */ jsxs("div", { className: "date-picker__input-start", children: [
              /* @__PURE__ */ jsx("label", { children: "Прибытие" }),
              /* @__PURE__ */ jsx(
                IMaskInput,
                {
                  autoFocus: true,
                  mask: "00-00-0000",
                  value: field.value || "",
                  placeholder: "Укажите дату",
                  "aria-invalid": errors.startDate ? "true" : "false",
                  onAccept: (value) => {
                    const date = parse(value, "dd-MM-yyyy", /* @__PURE__ */ new Date());
                    if (!isNaN(date) && date > /* @__PURE__ */ new Date()) {
                      setStartDate(date);
                      setValue("startDate", format(date, "dd-MM-yyyy"));
                      clearErrors("startDate");
                      setStartFormattedDate(
                        format(startDate, "dd MMM yyyy г.", {
                          locale: ru
                        })
                      );
                    }
                    console.log(errors);
                  },
                  style: { border: "none" },
                  className: "date-picker__input"
                }
              ),
              errors.startDate && /* @__PURE__ */ jsx(
                "img",
                {
                  className: "error-icon date-picker__error-start",
                  src: errorImage,
                  alt: "error"
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          Controller,
          {
            name: "endDate",
            control,
            render: ({ field }) => /* @__PURE__ */ jsxs("div", { className: "date-picker__input-end", children: [
              /* @__PURE__ */ jsx("label", { children: "Выезд" }),
              /* @__PURE__ */ jsx(
                IMaskInput,
                {
                  mask: "00-00-0000",
                  "aria-invalid": errors.endDate ? "true" : "false",
                  value: field.value || "",
                  placeholder: "Укажите дату",
                  onAccept: (value) => {
                    const date = parse(value, "dd-MM-yyyy", /* @__PURE__ */ new Date());
                    if (!isNaN(date) && date > startDate) {
                      setEndDate(date);
                      setValue("endDate", format(date, "dd-MM-yyyy"));
                      console.log(errors);
                      clearErrors("endDate");
                      setEndFormattedDate(
                        format(date, "dd MMM yyyy г.", {
                          locale: ru
                        })
                      );
                    }
                  },
                  style: { border: "none" },
                  className: "date-picker__input"
                }
              ),
              errors.endDate && /* @__PURE__ */ jsx(
                "img",
                {
                  className: "error-icon date-picker__error-end",
                  src: errorImage,
                  alt: "error"
                }
              )
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "date-picker__calendar", children: /* @__PURE__ */ jsx(
      Controller,
      {
        name: "dates",
        control,
        render: ({ field }) => /* @__PURE__ */ jsx(
          DynamicDatePicker,
          {
            ...field,
            selected: startDate,
            onChange,
            startDate,
            endDate,
            monthsShown: 2,
            inline: true,
            locale: ru,
            minDate: /* @__PURE__ */ new Date(),
            selectsRange: true
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "date-picker__bottom", children: [
      /* @__PURE__ */ jsx("div", { className: "date-picker__clear", onClick: handleResetDates, children: "Сбросить даты" }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "button", onClick: console.log(errors), children: "Выбрать" })
    ] })
  ] });
};
const SendOk = ({ changeIsSubmited, send }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Overlay, {}),
    /* @__PURE__ */ jsxs("div", { className: "send-ok", children: [
      /* @__PURE__ */ jsx("div", { "data-close": true, class: "modal__close", onClick: () => changeIsSubmited(false), children: "×" }),
      /* @__PURE__ */ jsx("a", { className: "logo", href: "/", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "logo" }) }),
      /* @__PURE__ */ jsxs("div", { className: "send-ok__descriptions", children: [
        /* @__PURE__ */ jsx("h3", { className: "send-ok__descriptions-title", children: send ? "Мы свяжемся с вами в ближайшее время!" : "Произошла ошибка, данные не отправлены" }),
        /* @__PURE__ */ jsx("p", { className: "send-ok__descriptions-text", children: "А пока Вы можете посетить наши социальные сети:" }),
        /* @__PURE__ */ jsxs("div", { className: "send-ok__descriptions-socials", children: [
          Icon("inst"),
          Icon("vk-send")
        ] })
      ] })
    ] })
  ] });
};
var define_import_meta_env_default$1 = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
dynamic(() => import("react-datepicker"), {
  ssr: false
});
const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isErrorSubmitted, setIsErrorSubmitted] = useState(false);
  const [addNameClass, setAddNameClass] = useState("");
  useState("");
  const [addDateClass, setAddDateClass] = useState("");
  const [addPhoneClass, setAddPhoneClass] = useState("");
  const [selectedOption, setSelectedOption] = useState("#afafaf !important");
  const [showPhoneMask, setShowPhoneMask] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startFormattedDate, setStartFormattedDate] = useState("");
  const [endFormattedDate, setEndFormattedDate] = useState("");
  const [initialStartDate, setInitialStartDate] = useState("");
  const [initialEndDate, setInitialEndDate] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const schema = yup.object().shape({
    dates: yup.string().required(),
    firstName: yup.string().required("Обязательно для ввода").max(20).min(2),
    phone: yup.string().matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Неверно введен номер").required("Обязательно для ввода"),
    select: yup.object().shape({
      value: yup.string().required("Обязательно для ввода"),
      label: yup.string()
    })
  }).required();
  useRef(null);
  const selectClass = () => {
    setSelectedOption("#f7fdfb !important");
  };
  const handleNameClassChange = () => {
    setAddNameClass("input-form-ok");
  };
  const removeNameClassChange = () => {
    setAddNameClass("");
  };
  const handlePhoneClassChange = () => {
    setAddPhoneClass("input-form-ok");
  };
  const removePhoneClassChange = () => {
    setAddPhoneClass("");
  };
  const handleDateClassChange = () => {
    setAddDateClass("input-form-ok");
  };
  const removeDateClassChange = () => {
    setAddDateClass("");
  };
  const changeIsSubmited = (val) => {
    setIsSubmitted(val);
    setIsErrorSubmitted(val);
  };
  const {
    control,
    handleSubmit,
    formState,
    formState: { errors, isValid: isValid2 },
    register,
    watch,
    setValue,
    getFieldState,
    clearErrors
  } = useForm({
    defaultValues: {
      dates: "",
      firstName: "",
      phone: "",
      select: ""
      // Добавляем значение по умолчанию для текстовой области
    },
    resolver: yupResolver(schema)
  });
  const firstNameValue = watch("firstName");
  watch("dates");
  const phoneValue = watch("phone");
  const selectValue = watch("select");
  const handleDatePickerSubmit = (data) => {
    setInitialStartDate(data.startDate);
    setInitialEndDate(data.endDate);
    const startDay = format(data.startDate, "dd MMM yyyy г.", { locale: ru });
    const endDay = format(data.endDate, "dd MMM yyyy г.", { locale: ru });
    setStartFormattedDate(format(data.startDate, "dd-MM-yyyy"));
    setEndFormattedDate(format(data.endDate, "dd-MM-yyyy"));
    setStartDate(startDay);
    setEndDate(endDay);
    setValue("dates", `${data.startDate} - ${data.endDate}`);
    setOpenCalendar(false);
    handleDateClassChange();
  };
  const [openCalendar, setOpenCalendar] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  useRef(null);
  const onSubmit = async (data) => {
    const formattedData = {};
    Object.keys(data).map((key) => {
      if (key === "dates") {
        formattedData.startDay = startFormattedDate;
        formattedData.endDay = endFormattedDate;
      } else if (key === "select") {
        formattedData.guests = data.select.value;
      } else {
        formattedData[key] = data[key];
      }
    });
    console.log(formattedData);
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${define_import_meta_env_default$1.VITE_TELEGRAM_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            chat_id: define_import_meta_env_default$1.VITE_CHAT_ID,
            // Идентификатор чата или канала
            text: `Новое сообщение из формы:
Имя: ${formattedData.firstName}
Телефон: ${formattedData.phone}
Количество людей: ${formattedData.guests}
Дата заезда: ${formattedData.startDay}
Дата выезда: ${formattedData.endDay}`
          })
        }
      );
      if (!response.ok) {
        throw new Error("Ошибка отправки сообщения");
      }
      console.log("Сообщение успешно отправлено в телеграм-канал");
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 1e4);
    } catch (error) {
      console.error("Ошибка отправки сообщения:", error);
      setIsErrorSubmitted(true);
      setTimeout(() => {
        setIsErrorSubmitted(false);
      }, 1e4);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "booking", children: [
    openCalendar && /* @__PURE__ */ jsx(
      DatePicker,
      {
        onSubmitCallback: handleDatePickerSubmit,
        initialDates: { initialStartDate, initialEndDate }
      }
    ),
    openCalendar && /* @__PURE__ */ jsx(Overlay, { onClick: () => setOpenCalendar(false) }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "booking__wrapper", children: [
      /* @__PURE__ */ jsx("div", { className: "booking__bg", children: /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1007",
          height: "392",
          viewBox: "0 0 1007 392",
          fill: "none",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M0 24C0 10.7452 10.7452 0 24 0H983C996.255 0 1007 10.7452 1007 24V368C1007 381.255 996.255 392 983 392H659C645.745 392 635 381.255 635 368V258C635 244.745 624.255 234 611 234H210H24C10.7452 234 0 223.255 0 210V24Z",
              fill: "#3B3B3B"
            }
          )
        }
      ) }),
      hasMounted && /* @__PURE__ */ jsxs(
        "form",
        {
          className: "booking__form",
          id: "booking-form",
          onSubmit: handleSubmit(onSubmit),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "input__wrapper booking__input-wrapper", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  ...register("dates"),
                  "aria-invalid": errors.dates ? "true" : "false",
                  placeholder: "Даты пребывания",
                  className: `input-form ${addDateClass}`,
                  onBlur: () => {
                    errors.dates || !(startDate && endDate) ? removeDateClassChange() : handleDateClassChange();
                  },
                  onClick: () => {
                    clearErrors("dates");
                    errors.dates ? removeDateClassChange() : handleDateClassChange();
                    setOpenCalendar(!openCalendar);
                  },
                  onChange: (event2) => {
                    setValue("dates", event2.target.value);
                    if (errors.dates) {
                      removeDateClassChange();
                    } else {
                      handleDateClassChange();
                    }
                  },
                  value: startDate && endDate ? `${startDate} - ${endDate}` : "",
                  autoComplete: "off"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "booking__input-arrow", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  height: "20",
                  width: "20",
                  viewBox: "0 0 20 20",
                  "aria-hidden": "true",
                  focusable: "false",
                  fill: "#afafaf",
                  children: /* @__PURE__ */ jsx("path", { d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z", stroke: "#3B3B3B" })
                }
              ) }),
              errors.dates && /* @__PURE__ */ jsx("img", { className: "error-icon", src: errorImage, alt: "error" })
            ] }),
            /* @__PURE__ */ jsx(
              Controller,
              {
                name: "select",
                control,
                render: ({ field }) => /* @__PURE__ */ jsxs("div", { className: "input__wrapper booking__input-wrapper", children: [
                  /* @__PURE__ */ jsx(
                    Select,
                    {
                      ...field,
                      options: [
                        { value: "1", label: "1" },
                        { value: "2", label: "2" },
                        { value: "3", label: "3" },
                        { value: "4", label: "4" },
                        { value: "5", label: "5" },
                        { value: "6", label: "6" },
                        { value: "7", label: "7" },
                        { value: "8", label: "8" },
                        { value: "9", label: "9" },
                        { value: "10", label: "10" }
                      ],
                      placeholder: "Количество гостей",
                      instanceId: useId(),
                      className: "react-select-container",
                      classNamePrefix: "react-select",
                      onMenuClose: () => {
                        if (selectValue.value === void 0) {
                          selectClass();
                        }
                      },
                      styles: {
                        control: (baseStyles, { isFocused: isFocused2 }) => ({
                          ...baseStyles,
                          borderColor: errors.select ? "#eb394f !important" : selectedOption
                        }),
                        placeholder: (baseStyles, { isFocused: isFocused2 }) => ({
                          ...baseStyles,
                          color: errors.select ? "#eb394f !important" : "#afafaf !important",
                          opacity: errors.select ? "1" : "0.5"
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          svg: {
                            fill: errors.select ? "#eb394f" : selectedOption
                          }
                        })
                      }
                    }
                  ),
                  errors.select && /* @__PURE__ */ jsx(
                    "img",
                    {
                      className: "error-icon",
                      src: errorImage,
                      alt: "error"
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "input__wrapper booking__input-wrapper", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  ...register("firstName"),
                  "aria-invalid": errors.firstName ? "true" : "false",
                  placeholder: "Имя*",
                  className: `input-form ${addNameClass}`,
                  onBlur: () => {
                    errors.firstName || firstNameValue.length < 2 ? removeNameClassChange() : handleNameClassChange();
                  }
                }
              ),
              errors.firstName && /* @__PURE__ */ jsx("img", { className: "error-icon", src: errorImage, alt: "error" })
            ] }),
            /* @__PURE__ */ jsx(
              Controller,
              {
                name: "phone",
                control,
                render: ({ field }) => /* @__PURE__ */ jsxs("div", { className: "input__wrapper booking__input-wrapper ", children: [
                  /* @__PURE__ */ jsx(
                    IMaskInput,
                    {
                      mask: showPhoneMask ? "+{7} (000) 000-00-00" : "",
                      definitions: {
                        0: /[0-9]/
                      },
                      placeholder: isFocused ? "+7 (___) ___-__-__" : "Телефон*",
                      value: field.value,
                      onAccept: (value) => field.onChange(value),
                      inputRef: (input) => {
                        field.ref(input);
                        if (errors.phone) {
                          input.focus();
                        }
                      },
                      className: `input-form phone-input ${addPhoneClass}`,
                      onFocus: () => {
                        setShowPhoneMask(true);
                        handleFocus();
                      },
                      onBlur: () => {
                        setShowPhoneMask(false);
                        handleBlur();
                        errors.phone || phoneValue.length < 18 ? removePhoneClassChange() : handlePhoneClassChange();
                      },
                      "aria-invalid": errors.phone ? "true" : "false"
                    }
                  ),
                  errors.phone ? /* @__PURE__ */ jsx(
                    "img",
                    {
                      className: "error-icon",
                      src: errorImage,
                      alt: "error"
                    }
                  ) : /* @__PURE__ */ jsx("img", {})
                ] })
              }
            ),
            isValid2 && /* @__PURE__ */ jsxs("div", { className: "booking__price", children: [
              "Сумма предоплаты: ",
              /* @__PURE__ */ jsx("p", { children: "5 000 ₽" })
            ] }),
            /* @__PURE__ */ jsx("button", { className: "button", children: "Забронировать" }),
            /* @__PURE__ */ jsxs("div", { className: "booking__socials", children: [
              /* @__PURE__ */ jsx("p", { className: "booking__socials-text", children: "Или свяжитесь с нами прямо сейчас!" }),
              /* @__PURE__ */ jsxs("div", { className: "booking__socials-items", children: [
                Icon("phone"),
                Icon("tg"),
                Icon("wa")
              ] })
            ] }),
            isSubmitted && /* @__PURE__ */ jsx(SendOk, { changeIsSubmited, send: true }),
            isErrorSubmitted && /* @__PURE__ */ jsx(SendOk, { changeIsSubmited, send: false })
          ]
        }
      )
    ] }) })
  ] });
};
const Title = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("h2", { className: `title ${props.classAdd}`, children: props.children }) });
};
const photo1 = "/images/active-photo/1.png";
const photo2 = "/images/active-photo/2.png";
const Home = () => {
  const [activePhoto, setActivePhoto] = useState(photo1);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "home", id: "home", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "home__bg" }),
    /* @__PURE__ */ jsxs("div", { className: "home__wrapper", children: [
      /* @__PURE__ */ jsx(Title, { classAdd: "title_black", children: "Что предлагает наш уютный дом:" }),
      /* @__PURE__ */ jsxs("div", { className: "home__block", children: [
        /* @__PURE__ */ jsxs("div", { className: "home__description", children: [
          /* @__PURE__ */ jsxs("div", { className: "home__icons", children: [
            /* @__PURE__ */ jsxs("div", { className: "home__icon", children: [
              /* @__PURE__ */ jsx("div", { className: "home__icon-photo", children: /* @__PURE__ */ jsx("img", { src: "/icons/home-icon1.svg", alt: "home" }) }),
              /* @__PURE__ */ jsx("p", { className: "home__icon-text", children: "180 м2" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "home__icon", children: [
              /* @__PURE__ */ jsx("div", { className: "home__icon-photo", children: /* @__PURE__ */ jsx("img", { src: "/icons/home-icon2.svg", alt: "home" }) }),
              /* @__PURE__ */ jsx("p", { className: "home__icon-text", children: "4 спальни" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "home__icon", children: [
              /* @__PURE__ */ jsx("div", { className: "home__icon-photo", children: /* @__PURE__ */ jsx("img", { src: "/icons/home-icon3.svg", alt: "home" }) }),
              /* @__PURE__ */ jsx("p", { className: "home__icon-text", children: "2 санузла " })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "home__icon", children: [
              /* @__PURE__ */ jsx("div", { className: "home__icon-photo", children: /* @__PURE__ */ jsx("img", { src: "/icons/home-icon4.svg", alt: "home" }) }),
              /* @__PURE__ */ jsx("p", { className: "home__icon-text", children: "Банный чан" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "home__text", children: [
            "Погружение в уникальный мир комфорта и роскоши – наш загородный дом, где каждый момент пропитан неповторимой гармонией.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "Наш просторный дом общей площадью 180 м",
            /* @__PURE__ */ jsx("sup", { className: "sup", children: "2" }),
            " создан для комфортного размещения до 10 человек. Огороженная территория обеспечивает частную и безопасную обстановку, а наличие парковки делает пребывание удобным для всех гостей.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsxs("p", { className: "home__text-1", children: [
              "Изысканная терраса площадью 60 м",
              /* @__PURE__ */ jsx("sup", { className: "sup", children: "2" }),
              " предлагает просторное пространство для отдыха. Здесь вы обнаружите уютный 4-метровый стол, идеальное место для семейных ужинов или вечерних посиделок с друзьями."
            ] }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("p", { className: "home__text-2", children: "Гриль-зона и банный чан добавляют шарма, создавая атмосферу праздника на природе." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "home__active-photo", children: [
          /* @__PURE__ */ jsx("div", { className: "home__top", children: /* @__PURE__ */ jsx(
            "img",
            {
              onClick: () => setActivePhoto(activePhoto === photo1 ? photo2 : photo1),
              src: activePhoto,
              alt: "slide"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "home__bottom", children: [
            /* @__PURE__ */ jsxs("div", { className: "home__images", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: photo1,
                  alt: "slide",
                  onClick: () => setActivePhoto(photo1),
                  className: activePhoto === photo1 ? "active" : ""
                }
              ),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: photo2,
                  alt: "slide",
                  onClick: () => setActivePhoto(photo2),
                  className: activePhoto === photo2 ? "active" : ""
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "home__buttons", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  onClick: () => setActivePhoto(photo1),
                  className: `home__button home__button-prev ${activePhoto === photo1 ? "disabled" : ""}`,
                  children: /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      width: "26.000000",
                      height: "11.000000",
                      viewBox: "0 0 26 11",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      xmlnsXlink: "http://www.w3.org/1999/xlink",
                      children: [
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            id: "Vector (Stroke)",
                            d: "M0.292969 6.20703C-0.0976562 5.81641 -0.0976562 5.18359 0.292969 4.79297L4.29297 0.792969C4.68359 0.402344 5.31641 0.402344 5.70703 0.792969C6.09766 1.18359 6.09766 1.81641 5.70703 2.20703L2.41406 5.5L5.70703 8.79297C6.09766 9.18359 6.09766 9.81641 5.70703 10.207C5.31641 10.5977 4.68359 10.5977 4.29297 10.207L0.292969 6.20703Z",
                            fill: "#F7FDFB",
                            fillOpacity: "1.000000",
                            fillRule: "evenodd"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            id: "Vector (Stroke)",
                            d: "M4 5.5C4 4.94775 4.44727 4.5 5 4.5L25 4.5C25.5527 4.5 26 4.94775 26 5.5C26 6.05225 25.5527 6.5 25 6.5L5 6.5C4.44727 6.5 4 6.05225 4 5.5Z",
                            fill: "#F7FDFB",
                            fillOpacity: "1.000000",
                            fillRule: "evenodd"
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  onClick: () => setActivePhoto(photo2),
                  className: `home__button home__button-next ${activePhoto === photo2 ? "disabled" : ""}`,
                  children: /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      width: "26.000000",
                      height: "11.000000",
                      viewBox: "0 0 26 11",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      xmlnsXlink: "http://www.w3.org/1999/xlink",
                      children: [
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            id: "Vector (Stroke)",
                            d: "M25.707 6.20703C26.0977 5.81641 26.0977 5.18359 25.707 4.79297L21.707 0.792969C21.3164 0.402344 20.6836 0.402344 20.293 0.792969C19.9023 1.18359 19.9023 1.81641 20.293 2.20703L23.5859 5.5L20.293 8.79297C19.9023 9.18359 19.9023 9.81641 20.293 10.207C20.6836 10.5977 21.3164 10.5977 21.707 10.207L25.707 6.20703Z",
                            fill: "#F7FDFB",
                            fillOpacity: "1.000000",
                            fillRule: "evenodd"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            id: "Vector (Stroke)",
                            d: "M22 5.5C22 4.94775 21.5527 4.5 21 4.5L1 4.5C0.447266 4.5 0 4.94775 0 5.5C0 6.05225 0.447266 6.5 1 6.5L21 6.5C21.5527 6.5 22 6.05225 22 5.5Z",
                            fill: "#F7FDFB",
                            fillOpacity: "1.000000",
                            fillRule: "evenodd"
                          }
                        )
                      ]
                    }
                  )
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) }) });
};
const atmosphereImage = "/images/swiper-promo/slide4.jpeg";
const Atmosphere = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "atmosphere", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "atmosphere__wrapper", children: [
    /* @__PURE__ */ jsx("div", { className: "atmosphere__bg" }),
    /* @__PURE__ */ jsx("div", { className: "atmosphere__bg-1" }),
    /* @__PURE__ */ jsx("div", { className: "atmosphere__bg-2" }),
    /* @__PURE__ */ jsx("div", { className: "atmosphere__bg-3" }),
    /* @__PURE__ */ jsxs("div", { className: "atmosphere__block", children: [
      /* @__PURE__ */ jsx("div", { className: "atmosphere__image", children: /* @__PURE__ */ jsx("img", { src: atmosphereImage, alt: "atmosphere" }) }),
      /* @__PURE__ */ jsxs("div", { className: "atmosphere__description", children: [
        /* @__PURE__ */ jsx("h3", { className: "atmosphere__subtitle subtitle subtitle_black", children: "Насладитесь особенной атмосферой в спальне на втором этаже, где ванная прямо в комнате!" }),
        /* @__PURE__ */ jsxs("p", { className: "text text_black", children: [
          "Это уникальное решение позволяет создавать запоминающиеся моменты и неповторимые фотосессии. Вы сможете наслаждаться комфортом и интимностью, оставаясь в уютной обстановке своего приватного уголка.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          "Наш дом предлагает удивительные возможности для отдыха и проведения времени, обеспечивая комфорт и элегантность в каждой детали."
        ] })
      ] })
    ] })
  ] }) }) }) });
};
const cosiness = [
  { name: "slide1", url: "/images/swiper-cosiness/1.jpeg" },
  { name: "slide2", url: "/images/swiper-cosiness/2.jpeg" },
  { name: "slide3", url: "/images/swiper-cosiness/3.jpeg" },
  { name: "slide4", url: "/images/swiper-cosiness/4.jpeg" },
  { name: "slide5", url: "/images/swiper-cosiness/5.jpeg" },
  { name: "slide6", url: "/images/swiper-cosiness/6.jpeg" },
  { name: "slide7", url: "/images/swiper-cosiness/7.jpeg" },
  { name: "slide8", url: "/images/swiper-cosiness/8.jpeg" },
  { name: "slide9", url: "/images/swiper-cosiness/9.jpeg" },
  { name: "slide10", url: "/images/swiper-cosiness/10.jpeg" },
  { name: "slide11", url: "/images/swiper-cosiness/11.jpeg" },
  { name: "slide12", url: "/images/swiper-cosiness/12.jpeg" },
  { name: "slide13", url: "/images/swiper-cosiness/13.jpeg" },
  { name: "slide14", url: "/images/swiper-cosiness/14.jpeg" },
  { name: "slide15", url: "/images/swiper-cosiness/15.jpeg" },
  { name: "slide16", url: "/images/swiper-cosiness/16.jpeg" },
  { name: "slide17", url: "/images/swiper-cosiness/17.jpeg" },
  { name: "slide18", url: "/images/swiper-cosiness/18.jpeg" },
  { name: "slide19", url: "/images/swiper-cosiness/19.jpeg" },
  { name: "slide20", url: "/images/swiper-cosiness/20.jpeg" },
  { name: "slide21", url: "/images/swiper-cosiness/21.jpeg" },
  { name: "slide22", url: "/images/swiper-cosiness/22.jpeg" },
  { name: "slide23", url: "/images/swiper-cosiness/23.jpeg" }
];
const playImage = "/icons/play.svg";
const Cosiness = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const handleVideoEnded = () => {
    setIsPlaying(false);
  };
  useEffect(() => {
    const handleKeyDown = (event2) => {
      if (event2.key === "ArrowLeft" || event2.key === "ArrowRight") {
        event2.preventDefault();
        handleTogglePlay();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleTogglePlay]);
  return /* @__PURE__ */ jsx("div", { className: "cosiness", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "cosiness__wrapper", children: [
    /* @__PURE__ */ jsx("div", { className: "cosiness__bg" }),
    /* @__PURE__ */ jsxs("div", { className: "cosiness__block", children: [
      /* @__PURE__ */ jsx(Title, { classAdd: "title_black title_right", children: "Красота и уют в каждом кадре" }),
      /* @__PURE__ */ jsxs("div", { className: "cosiness__swipers", children: [
        /* @__PURE__ */ jsxs(
          Swiper,
          {
            className: "cosiness-swiper",
            modules: [
              FreeMode,
              Navigation,
              Thumbs,
              Pagination,
              Scrollbar,
              A11y
            ],
            spaceBetween: 32,
            slidesPerView: 1,
            scrollbar: { draggable: true },
            thumbs: { swiper: thumbsSwiper },
            navigation: {
              nextEl: ".cosiness-next-button",
              prevEl: ".cosiness-prev-button"
            },
            breakpoints: {
              1366: {
                slidesPerView: 2
              }
            },
            children: [
              cosiness.map((item) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("img", { src: item.url, alt: "slide" }) }, item.name)),
              /* @__PURE__ */ jsxs("div", { className: "cosiness__navigation", children: [
                /* @__PURE__ */ jsx("button", { className: "cosiness-prev-button", children: /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "26",
                    height: "12",
                    viewBox: "0 0 26 12",
                    fill: "none",
                    children: [
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M0.292893 6.70711C-0.0976309 6.31658 -0.0976309 5.68342 0.292893 5.29289L4.29289 1.29289C4.68342 0.902369 5.31658 0.902369 5.70711 1.29289C6.09763 1.68342 6.09763 2.31658 5.70711 2.70711L2.41421 6L5.70711 9.29289C6.09763 9.68342 6.09763 10.3166 5.70711 10.7071C5.31658 11.0976 4.68342 11.0976 4.29289 10.7071L0.292893 6.70711Z",
                          fill: "#232221"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M4 6C4 5.44772 4.44772 5 5 5L25 5C25.5523 5 26 5.44772 26 6C26 6.55229 25.5523 7 25 7L5 7C4.44772 7 4 6.55228 4 6Z",
                          fill: "#232221"
                        }
                      )
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsx("button", { className: "cosiness-next-button", children: /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "26",
                    height: "12",
                    viewBox: "0 0 26 12",
                    fill: "none",
                    children: [
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M25.7071 6.70711C26.0976 6.31658 26.0976 5.68342 25.7071 5.29289L21.7071 1.29289C21.3166 0.902369 20.6834 0.902369 20.2929 1.29289C19.9024 1.68342 19.9024 2.31658 20.2929 2.70711L23.5858 6L20.2929 9.29289C19.9024 9.68342 19.9024 10.3166 20.2929 10.7071C20.6834 11.0976 21.3166 11.0976 21.7071 10.7071L25.7071 6.70711Z",
                          fill: "#F7FDFB"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M22 6C22 5.44772 21.5523 5 21 5L1 5C0.447716 5 -1.85108e-08 5.44772 -1.19249e-08 6C-5.33895e-09 6.55229 0.447716 7 1 7L21 7C21.5523 7 22 6.55228 22 6Z",
                          fill: "#F7FDFB"
                        }
                      )
                    ]
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Swiper,
          {
            onSwiper: setThumbsSwiper,
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
            modules: [FreeMode, Navigation, Thumbs],
            className: "mySwiper",
            direction: "vertical",
            breakpoints: {
              980: {
                slidesPerView: 4
              }
            },
            children: cosiness.map((item) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("img", { src: item.url, alt: "slide" }) }, item.name))
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `cosiness__video ${!isPlaying && "cosiness__video-stop"}`,
          children: [
            /* @__PURE__ */ jsxs(
              "video",
              {
                className: "video-player",
                ref: videoRef,
                onEnded: handleVideoEnded,
                onClick: handleTogglePlay,
                children: [
                  /* @__PURE__ */ jsx("source", { src: "video/forest_time.mov", type: "video/mp4" }),
                  "Your browser does not support the video tag."
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleTogglePlay,
                className: "cosiness__video-play",
                children: !isPlaying && /* @__PURE__ */ jsx("img", { src: playImage, alt: "play/pause" })
              }
            )
          ]
        }
      )
    ] })
  ] }) }) });
};
const prices = [
  {
    name: "Wi-Fi"
  },
  { name: "Капсульная кофемашина с капсулами" },
  { name: "Фен" },
  { name: "Вся необходимая посуда" },
  { name: "Плита" },
  { name: "Постельное бельё" },
  { name: "Чайник" },
  { name: "Комплекты полотенец" },
  { name: "Чай" },
  { name: "Гигиенические наборы для гостей" },
  { name: "Холодильник" },
  { name: "Терраса с 4х метровым деревянным столом" },
  { name: "Посудомоечная машина" },
  { name: "Продукты для завтрака (яйца, бекон, молоко, крупы, хлеб)" },
  { name: "Музыкальные колонки" },
  { name: "Гриль-зона с решетками, казаном, дровами, углём и розжигом" },
  { name: "Раскладывающийся диван" }
];
const priceImage = "/images/price.png";
const priceBG = "/images/price-bg.jpg";
const okImage = "/icons/ok.svg";
const notImage = "/icons/not.svg";
const Prices = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "prices", id: "prices", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "prices__wrapper", children: [
    /* @__PURE__ */ jsxs("div", { className: "prices__blocks", children: [
      /* @__PURE__ */ jsxs("div", { className: "prices__include", children: [
        /* @__PURE__ */ jsx("h3", { className: "prices__subtitle subtitle subtitle_black", children: "Включено в стоимость" }),
        /* @__PURE__ */ jsx("ul", { className: "prices__services", children: prices.map((price, id) => /* @__PURE__ */ jsx("li", { children: price.name }, id)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "prices__bathhouse", children: [
        /* @__PURE__ */ jsxs("div", { className: "prices__addservices", children: [
          /* @__PURE__ */ jsx("h3", { className: "prices__subtitle subtitle subtitle_black", children: "Оплачивается отдельно" }),
          /* @__PURE__ */ jsxs("ul", { className: "prices__addservices-list", children: [
            /* @__PURE__ */ jsx("li", { children: "Банный чан" }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#exclusive", children: "Дополнительные услуги" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "prices__addservices-image", children: /* @__PURE__ */ jsx("img", { src: "/images/swiper-promo/slide2.jpeg", alt: "forest" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "prices__prices", children: [
      /* @__PURE__ */ jsx("h3", { className: "prices__subtitle subtitle subtitle_black", children: "Цена" }),
      /* @__PURE__ */ jsxs("div", { className: "prices__contain", children: [
        /* @__PURE__ */ jsxs("div", { className: "prices__day", children: [
          /* @__PURE__ */ jsxs("div", { className: "prices__day-top", children: [
            /* @__PURE__ */ jsx("p", { className: "prices__day-title", children: "Посуточная аренда" }),
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsxs("li", { children: [
                "Вс-Чт",
                /* @__PURE__ */ jsxs("span", { children: [
                  "20 000",
                  /* @__PURE__ */ jsx("span", { className: "ruble", children: "₽" }),
                  "/сут."
                ] })
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                "Пт-Вс",
                /* @__PURE__ */ jsxs("span", { children: [
                  "30 000 ",
                  /* @__PURE__ */ jsx("span", { className: "ruble", children: "₽" }),
                  "/сут."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "prices__day-text", children: "*Скидка 30 % на второй и последующие дни при бронировании от 2х и более суток с пн по пт" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "prices__special", children: [
            /* @__PURE__ */ jsxs("div", { className: "prices__special-title", children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  width: "22",
                  height: "22",
                  viewBox: "0 0 22 22",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z",
                      stroke: "#F7FDFB",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("p", { children: "Специальное предложение" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "prices__special-text", children: [
              "А ещё больше выгоды ждёт вас при бронировании на выходные!",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("br", {}),
              "Бронируйте проживание на 2-е суток с пятницы по воскресенье, всего за ",
              /* @__PURE__ */ jsxs("span", { children: [
                "45 000 ",
                /* @__PURE__ */ jsx("span", { className: "ruble", children: "₽" })
              ] }),
              "."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "prices__hour", children: [
          /* @__PURE__ */ jsx("div", { className: "prices__hour-title", children: "Почасовая аренда" }),
          /* @__PURE__ */ jsxs("div", { className: "prices__hour-two", children: [
            /* @__PURE__ */ jsxs("p", { className: "prices__hour-price", children: [
              "2 000  ",
              /* @__PURE__ */ jsx("span", { className: "ruble ruble-white", children: "₽" }),
              "/сут. "
            ] }),
            /* @__PURE__ */ jsx("p", { className: "prices__hour-time", children: "от 4 часов" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "prices__hour-text", children: "*Для фотосъёмок только в дневное время без ночёвки" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "prices__vat", children: [
          /* @__PURE__ */ jsx("div", { className: "prices__vat-title", children: "Банный чан" }),
          /* @__PURE__ */ jsxs("p", { className: "prices__vat-price", children: [
            "от 5 000  ",
            /* @__PURE__ */ jsx("span", { className: "ruble ruble-white", children: "₽" }),
            "/топка"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "prices__vat-text", children: "*Бронируется заранее, так как для его подготовки необходимо время. Подробности уточняйте у администратора" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "prices__image", children: /* @__PURE__ */ jsx("img", { src: priceImage, alt: "price" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "prices__bottom", children: [
      /* @__PURE__ */ jsxs("div", { className: "prices__rules", children: [
        /* @__PURE__ */ jsxs("div", { className: "prices__rules-top", children: [
          /* @__PURE__ */ jsx("h3", { className: "subtitle subtitle_black", children: "Правила бронирования" }),
          /* @__PURE__ */ jsxs("ul", { className: "prices__rules-list", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              "Предоплата ",
              /* @__PURE__ */ jsx("strong", { children: "5 000 " }),
              /* @__PURE__ */ jsx("span", { className: "ruble", children: "₽" })
            ] }),
            /* @__PURE__ */ jsx("li", { children: "Предоплата не возвращается при отмене бронирования менее, чем за 72 часа до даты заезда" }),
            /* @__PURE__ */ jsxs("li", { children: [
              "При заезде необходимо внести залог",
              " ",
              /* @__PURE__ */ jsx("strong", { children: "10 000 " }),
              /* @__PURE__ */ jsx("span", { className: "ruble", children: "₽" }),
              /* @__PURE__ */ jsx("br", {}),
              "Залог возвращается при условии сохранности имущества в доме"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "prices__rules-bottom", children: /* @__PURE__ */ jsx("img", { src: priceBG, alt: "bg" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "prices__comfort", children: [
        /* @__PURE__ */ jsx("h2", { className: "subtitle subtitle_black", children: "Условия комфортного проживания" }),
        /* @__PURE__ */ jsxs("ul", { className: "prices__comfort-list prices__comfort-list-ok", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("img", { src: okImage, alt: "ok" }),
            /* @__PURE__ */ jsx("p", { children: "Можно шуметь" })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("img", { src: okImage, alt: "ok" }),
            /* @__PURE__ */ jsx("p", { children: "Можно курить на террасе и территории" })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("img", { src: okImage, alt: "ok" }),
            /* @__PURE__ */ jsxs("div", { className: "prices__comfort-block", children: [
              /* @__PURE__ */ jsx("p", { children: "Заезд после 15:00" }),
              /* @__PURE__ */ jsx("p", { children: "Выезд строго до 12:00" }),
              /* @__PURE__ */ jsx("p", { className: "prices__comfort-small-text", children: "*Сообщайте точное время прибытия заранее, чтобы мы смогли вас встретить" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("img", { src: notImage, alt: "not" }),
            /* @__PURE__ */ jsx("p", { children: "Не оставлять мусор на территории" })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("img", { src: notImage, alt: "not" }),
            /* @__PURE__ */ jsxs("p", { children: [
              "У нас в доме не курят. Штраф ",
              /* @__PURE__ */ jsx("strong", { children: "10 000 " }),
              /* @__PURE__ */ jsx("span", { className: "ruble", children: "₽" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("img", { src: notImage, alt: "not" }),
            /* @__PURE__ */ jsx("p", { children: "Лапкам вход закрыт. К сожалению, у нас нельзя с животными" })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("img", { src: notImage, alt: "not" }),
            /* @__PURE__ */ jsx("p", { children: "На всей территории запрещены салюты, фейерверки и любая пиротехника" })
          ] })
        ] })
      ] })
    ] })
  ] }) }) }) });
};
function Rest() {
  useState(0);
  useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "rest", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "rest__bg", children: /* @__PURE__ */ jsx(
      "svg",
      {
        width: "1366",
        height: "594",
        viewBox: "0 0 1366 594",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M0 0V0C9.5746 0 9.5 0 9.5 0H1366V0V0V568C1366 582.359 1354.36 594 1340 594H855C840.64 594 829 582.359 829 568V457C829 442.64 817.359 431 803 431H26C11.6406 431 0 419.413 0 405.054C0 237.039 0 0 0 0Z",
            fill: "#3B3B3B"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "rest__wrapper", children: [
      /* @__PURE__ */ jsx("h2", { className: "title", children: "Забронируйте свой отдых" }),
      /* @__PURE__ */ jsx(Booking, {})
    ] })
  ] }) }) });
}
const air = "/icons/location/air.svg";
const forest = "/icons/location/forest.svg";
const insulation = "/icons/location/insulation.svg";
const lake = "/icons/location/lake.svg";
const autoImage = "/icons/auto.svg";
const Button = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("button", { className: `button ${props.classAdd}`, children: props.children }) });
};
const Location = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = (text) => {
    copy(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2e3);
    event.stopPropagation();
  };
  const scrollToTarget = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Координаты скопированы"
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "location", id: "location", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "location__bg" }),
    /* @__PURE__ */ jsxs("div", { className: "location__wrapper", children: [
      /* @__PURE__ */ jsx(Title, { children: "Уникальная локация" }),
      /* @__PURE__ */ jsx("p", { className: "location__description", children: "Наш загородный дом расположен в окружении природной красоты, прекрасно укрытый от городской суеты. Он предлагает уединение и умиротворение в сердце природы, создавая идеальное место для отдыха и восстановления." }),
      /* @__PURE__ */ jsxs("div", { className: "location__items", children: [
        /* @__PURE__ */ jsxs("div", { className: "location__item", children: [
          /* @__PURE__ */ jsxs("div", { className: "location__item-image", children: [
            /* @__PURE__ */ jsx("img", { src: forest, alt: "forest" }),
            /* @__PURE__ */ jsx("p", { children: "Лесные тропы" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "location__item-text", children: [
            "Насладитесь бескрайним разнообразным лесом, где великолепно сочетаются хвойные, лиственные и различные другие породы деревьев. ",
            /* @__PURE__ */ jsx("br", {}),
            " Это идеальное место для прогулок и насыщения организма свежим кислородом, на фоне уникального аромата лесной зелени."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "location__item", children: [
          /* @__PURE__ */ jsxs("div", { className: "location__item-image", children: [
            /* @__PURE__ */ jsx("img", { src: air, alt: "air" }),
            /* @__PURE__ */ jsx("p", { children: "Чистый воздух" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "location__item-text", children: "Здесь вы будете наслаждаться чистым и свежим воздухом, благоприятным для вашего здоровья и благополучия. Отдыхая здесь, вы почувствуете освежающую разницу." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "location__item", children: [
          /* @__PURE__ */ jsxs("div", { className: "location__item-image", children: [
            /* @__PURE__ */ jsx("img", { src: lake, alt: "lake" }),
            /* @__PURE__ */ jsx("p", { children: "Озеро шитовское" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "location__item-text", children: "Всего в 10-15 мин. пешком располагается удивительное оз. Шитовское. Его спокойная вода, окруженная живописными пейзажами, станет вашим убежищем, где можно наслаждаться умиротворением и водными развлечениями." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "location__item", children: [
          /* @__PURE__ */ jsxs("div", { className: "location__item-image", children: [
            /* @__PURE__ */ jsx("img", { src: insulation, alt: "insulation" }),
            /* @__PURE__ */ jsx("p", { children: "Полная изоляция" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "location__item-text", children: "Это уединенное место, где природа предоставляет спокойствие и приватность, даруя возможность наслаждаться миром вдали от городской суеты и шума. Здесь вы не только окунетесь в атмосферу умиротворения, но и можете встретить множество лесных жителей, которые разделят с вами этот уголок природы." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "location__items-text", children: "Эти уникальные особенности локации делают это место идеальным для тех, кто ищет уединение, природную красоту и возможность насладиться чистотой и спокойствием загородной жизни." }),
      /* @__PURE__ */ jsxs("div", { className: "location__found", id: "location__found", children: [
        /* @__PURE__ */ jsx(Title, { children: "Как нас найти" }),
        /* @__PURE__ */ jsxs("div", { className: "location__blocks", children: [
          /* @__PURE__ */ jsxs("div", { className: "location__auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "location__auto-top", children: [
              /* @__PURE__ */ jsx("div", { className: "location__auto-image", children: /* @__PURE__ */ jsx("img", { src: autoImage, alt: "auto" }) }),
              /* @__PURE__ */ jsx("div", { className: "location__auto-title", children: "на машине" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "location__auto-text", children: [
              "Направляйтесь по Верхотурскому тракту через поселок Половинный до указателя оз. Шитовское. ",
              /* @__PURE__ */ jsx("br", {}),
              " Поверните на оз. Шитовское, двигайтесь 6 км. до указателя «Время леса»."
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "location__auto-geo", children: [
              contextHolder,
              /* @__PURE__ */ jsx("p", { children: "57.122785 60.511281" }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "location__copy",
                  onClick: (event2) => {
                    event2.preventDefault();
                    event2.stopPropagation();
                    copyToClipboard("57.122785 60.511281");
                    success();
                  },
                  children: /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            d: "M20 8H10C8.89543 8 8 8.89543 8 10V20C8 21.1046 8.89543 22 10 22H20C21.1046 22 22 21.1046 22 20V10C22 8.89543 21.1046 8 20 8Z",
                            stroke: "#AFAFAF",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            d: "M4 16C2.9 16 2 15.1 2 14V4C2 2.9 2.9 2 4 2H14C15.1 2 16 2.9 16 4",
                            stroke: "#AFAFAF",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          }
                        )
                      ]
                    }
                  )
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "location__map", children: /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                position: "relative",
                overflow: "hidden",
                height: "100%",
                display: "block",
                borderRadius: "24px"
              },
              children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://yandex.ru/maps/org/vremya_lesa/191238425384/?utm_medium=mapframe&utm_source=maps",
                    style: {
                      color: "#eee",
                      fontSize: "12px",
                      position: "absolute",
                      top: "0px"
                    },
                    children: "Время леса"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://yandex.ru/maps/11162/sverdlovsk-oblast/category/resort/184106400/?utm_medium=mapframe&utm_source=maps",
                    style: {
                      color: "#eee",
                      fontSize: "12px",
                      position: "absolute",
                      top: "14px"
                    },
                    children: "База, дом отдыха в Свердловской области"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "iframe",
                  {
                    src: "https://yandex.ru/map-widget/v1/?ll=60.508322%2C57.121875&mode=poi&poi%5Bpoint%5D=60.511310%2C57.122775&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D191238425384&z=11.38",
                    width: "100%",
                    height: "100%",
                    frameBorder: "0",
                    allowFullScreen: true,
                    style: { position: "relative" }
                  }
                )
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "button location__button button__green",
            onClick: () => scrollToTarget("booking-form"),
            children: "Забронировать"
          }
        )
      ] })
    ] })
  ] }) }) });
};
const exclusiveImage1 = "/images/exclusive/1.jpeg";
const exclusiveImage2 = "/images/exclusive/2.jpeg";
const exclusiveImage3 = "/images/exclusive/3.jpeg";
const Exclusive = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "exclusive", id: "exclusive", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "exclusive__wrapper", children: [
    /* @__PURE__ */ jsx(Title, { children: "Эксклюзивные услуги для вашего удовольствия" }),
    /* @__PURE__ */ jsx("h3", { className: "subtitle exclusive__subtitle", children: "Стоимость услуг обговаривается индивидуально" }),
    /* @__PURE__ */ jsxs("div", { className: "exclusive__items", children: [
      /* @__PURE__ */ jsxs("div", { className: "exclusive__item", children: [
        /* @__PURE__ */ jsx("div", { className: "exclusive__image", children: /* @__PURE__ */ jsx("img", { src: exclusiveImage1, alt: "exclusive" }) }),
        /* @__PURE__ */ jsx("div", { className: "exclusive__title", children: "Оформление фуршета" }),
        /* @__PURE__ */ jsxs("p", { className: "exclusive__text", children: [
          "Мы создаем атмосферу изысканности и элегантности благодаря нашему искусству оформления фуршета. ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          "Каждая деталь заботливо продумана, чтобы ваше мероприятие оставило незабываемые впечатления и вызвало восторг у гостей."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "exclusive__item", children: [
        /* @__PURE__ */ jsx("div", { className: "exclusive__image", children: /* @__PURE__ */ jsx("img", { src: exclusiveImage2, alt: "exclusive" }) }),
        /* @__PURE__ */ jsx("div", { className: "exclusive__title", children: "Декор для дома и участка" }),
        /* @__PURE__ */ jsxs("p", { className: "exclusive__text", children: [
          "Мы создаём атмосферу уюта и эстетики на любую тематику мероприятий. ",
          /* @__PURE__ */ jsx("br", {}),
          " ",
          /* @__PURE__ */ jsx("br", {}),
          "Индивидуальный подход и внимание к деталям придают нашему дому и окружающей его территории уникальный характер и шарм."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "exclusive__item", children: [
        /* @__PURE__ */ jsx("div", { className: "exclusive__image", children: /* @__PURE__ */ jsx("img", { src: exclusiveImage3, alt: "exclusive" }) }),
        /* @__PURE__ */ jsx("div", { className: "exclusive__title", children: "десерты на заказ" }),
        /* @__PURE__ */ jsxs("p", { className: "exclusive__text", children: [
          "Мы предлагаем эксклюзивные десерты, созданные с любовью и творчеством. ",
          /* @__PURE__ */ jsx("br", {}),
          " ",
          /* @__PURE__ */ jsx("br", {}),
          "Каждый десерт уникален и превосходен, придавая вашему мероприятию неповторимый штрих вкуса и наслаждения."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("a", { href: "#header", children: /* @__PURE__ */ jsx("button", { className: "exlusive-button", children: /* @__PURE__ */ jsxs(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "26",
        viewBox: "0 0 12 26",
        fill: "none",
        children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M5.29289 0.292893C5.68342 -0.0976311 6.31658 -0.0976311 6.70711 0.292893L10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711C10.3166 6.09763 9.68342 6.09763 9.29289 5.70711L6 2.41421L2.70711 5.70711C2.31658 6.09763 1.68342 6.09763 1.29289 5.70711C0.902369 5.31658 0.902369 4.68342 1.29289 4.29289L5.29289 0.292893Z",
              fill: "#F7FDFB"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M6 4C6.55228 4 7 4.44772 7 5L7 25C7 25.5523 6.55228 26 6 26C5.44772 26 5 25.5523 5 25L5 5C5 4.44772 5.44772 4 6 4Z",
              fill: "#F7FDFB"
            }
          )
        ]
      }
    ) }) })
  ] }) }) }) });
};
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const Form = () => {
  var _a;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isErrorSubmitted, setIsErrorSubmitted] = useState(false);
  const [addNameClass, setAddNameClass] = useState("");
  const [addPhoneClass, setAddPhoneClass] = useState("");
  const [addTextAreaClass, setAddTextAreaClass] = useState("");
  const [selectedOption, setSelectedOption] = useState("#afafaf !important");
  const [showPhoneMask, setShowPhoneMask] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  useState("");
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const selectClass = () => {
    setSelectedOption("#f7fdfb !important");
  };
  const handleNameClassChange = () => {
    setAddNameClass("input-form-ok");
  };
  const removeNameClassChange = () => {
    setAddNameClass("");
  };
  const handlePhoneClassChange = () => {
    setAddPhoneClass("input-form-ok");
  };
  const removePhoneClassChange = () => {
    setAddPhoneClass("");
  };
  const handleTextAreaClassChange = () => {
    setAddTextAreaClass("textarea-form-ok");
  };
  const removeTextAreaClassChange = () => {
    setAddTextAreaClass("");
  };
  useState(false);
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${define_import_meta_env_default.VITE_TELEGRAM_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            chat_id: define_import_meta_env_default.VITE_CHAT_ID,
            // Идентификатор чата или канала
            text: `Новое сообщение из формы:
Имя: ${data.firstName}
Телефон: ${data.phone}
Предпочтительный способ связи: ${data.select.value}
Комментарий: ${data.textarea}`
          })
        }
      );
      if (!response.ok) {
        throw new Error("Ошибка отправки сообщения");
      }
      console.log("Сообщение успешно отправлено в телеграм-канал");
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4e3);
    } catch (error) {
      console.error("Ошибка отправки сообщения:", error);
      setIsErrorSubmitted(true);
      setTimeout(() => {
        setIsErrorSubmitted(false);
      }, 4e3);
    }
  };
  const schema = yup.object().shape({
    firstName: yup.string().required("Обязательно для ввода").max(20).min(2),
    phone: yup.string().matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Неверно введен номер").required("Обязательно для ввода"),
    select: yup.object().shape({
      value: yup.string().required("Обязательно для ввода"),
      label: yup.string()
    }),
    textarea: yup.string().max(30, "Максимум 30 символов")
  }).required();
  useRef(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    watch
  } = useForm({
    defaultValues: {
      firstName: "",
      phone: "",
      guests: ""
      // Добавляем значение по умолчанию для текстовой области
    },
    resolver: yupResolver(schema)
  });
  const firstNameValue = watch("firstName");
  const phoneValue = watch("phone");
  watch("select");
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  useRef(null);
  return hasMounted && /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
    /* @__PURE__ */ jsxs("div", { className: "input__wrapper", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          ...register("firstName"),
          "aria-invalid": errors.firstName ? "true" : "false",
          placeholder: "Имя*",
          className: `input-form ${addNameClass}`,
          onBlur: () => {
            errors.firstName || firstNameValue.length < 2 ? removeNameClassChange() : handleNameClassChange();
          }
        }
      ),
      errors.firstName && /* @__PURE__ */ jsx("img", { className: "error-icon", src: errorImage, alt: "error" })
    ] }),
    /* @__PURE__ */ jsx(
      Controller,
      {
        name: "phone",
        control,
        render: ({ field }) => /* @__PURE__ */ jsxs("div", { className: "input__wrapper", children: [
          /* @__PURE__ */ jsx(
            IMaskInput,
            {
              mask: showPhoneMask ? "+{7} (000) 000-00-00" : "",
              definitions: {
                0: /[0-9]/
              },
              placeholder: !isEmail ? isFocused ? "+7 (___) ___-__-__" : "Телефон*" : isFocused ? "" : "Email*",
              value: !isEmail ? field.value : "",
              onAccept: (value) => field.onChange(value),
              inputRef: (input) => {
                field.ref(input);
                if (errors.phone) {
                  input.focus();
                }
              },
              className: `input-form input__phone-white ${addPhoneClass}`,
              onFocus: () => {
                setShowPhoneMask(!isEmail);
                handleFocus();
                console.log(field);
              },
              onBlur: () => {
                setShowPhoneMask(false);
                handleBlur();
                errors.phone || phoneValue.length < 18 ? removePhoneClassChange() : handlePhoneClassChange();
              },
              "aria-invalid": errors.phone ? "true" : "false"
            }
          ),
          errors.phone ? /* @__PURE__ */ jsx("img", { className: "error-icon", src: errorImage, alt: "error" }) : /* @__PURE__ */ jsx("img", {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      Controller,
      {
        name: "select",
        control,
        render: ({ field }) => /* @__PURE__ */ jsxs("div", { className: "input__wrapper", children: [
          /* @__PURE__ */ jsx(
            Select,
            {
              ...field,
              options: [
                { value: "Phone", label: "Телефонный звонок" },
                { value: "Whatsapp", label: "Whatsapp" },
                { value: "Telegram", label: "Telegram" },
                { value: "Email", label: "Почта" }
              ],
              placeholder: "Предпочтительный способ связи*",
              instanceId: useId(),
              className: "react-select-container",
              classNamePrefix: "react-select",
              onChange: (selectedOption2) => {
                field.onChange(selectedOption2);
                selectedOption2.value === "Email" ? setIsEmail(true) : setIsEmail(false);
                selectClass();
              },
              styles: {
                control: (baseStyles, { isFocused: isFocused2 }) => ({
                  ...baseStyles,
                  borderColor: errors.select ? "#eb394f !important" : selectedOption
                }),
                placeholder: (baseStyles, { isFocused: isFocused2 }) => ({
                  ...baseStyles,
                  color: errors.select ? "#eb394f !important" : "#afafaf !important",
                  opacity: errors.select ? "1" : "0.5"
                }),
                dropdownIndicator: (provided) => ({
                  ...provided,
                  svg: {
                    fill: errors.select ? "#eb394f" : selectedOption
                  }
                })
              }
            }
          ),
          errors.select && /* @__PURE__ */ jsx("img", { className: "error-icon", src: errorImage, alt: "error" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "input__wrapper", children: [
      /* @__PURE__ */ jsx(
        "textarea",
        {
          ...register("textarea"),
          "aria-invalid": errors.textarea ? "true" : "false",
          placeholder: "Комментарий (необязательное поле)",
          className: `textarea-form ${addTextAreaClass}`,
          onBlur: errors.textarea || ((_a = watch("textarea")) == null ? void 0 : _a.length) < 1 ? removeTextAreaClassChange : handleTextAreaClassChange
        }
      ),
      errors.textarea && /* @__PURE__ */ jsx("img", { className: "error-icon", src: errorImage, alt: "error" })
    ] }),
    /* @__PURE__ */ jsx(Button, { type: "submit", children: "Свяжитесь со мной" }),
    isSubmitted && /* @__PURE__ */ jsx(SendOk, { send: true }),
    isErrorSubmitted && /* @__PURE__ */ jsx(SendOk, { send: false })
  ] });
};
const Questions = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "questions", id: "questions", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "questions__wrapper", children: [
    /* @__PURE__ */ jsxs("div", { className: "questions__left", children: [
      /* @__PURE__ */ jsx(Title, { children: "Остались вопросы?" }),
      /* @__PURE__ */ jsx("p", { className: "questions__subtitle", children: "Оставьте контакты, и мы свяжемся с Вами в ближайшее время" }),
      /* @__PURE__ */ jsx("div", { className: "questions__form", children: /* @__PURE__ */ jsx(Form, {}) }),
      /* @__PURE__ */ jsx("p", { className: "questions__personal", children: "Нажимая на кнопку «Свяжитесь со мной», я принимаю условия пользовательского соглашения и даю согласие на обработку своих персональных данных." }),
      /* @__PURE__ */ jsxs("div", { className: "questions__socials", children: [
        /* @__PURE__ */ jsx("div", { className: "questions__socials-title", children: "Или свяжитесь с нами прямо сейчас!" }),
        /* @__PURE__ */ jsxs("div", { className: "questions__icons", children: [
          Icon("phone"),
          Icon("tg"),
          Icon("wa")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "questions__image", children: /* @__PURE__ */ jsx("img", { src: "/images/question.jpeg", alt: "family" }) })
  ] }) }) }) });
};
const Sale = () => {
  return /* @__PURE__ */ jsx("div", { className: "sale", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "sale__wrapper", children: [
    /* @__PURE__ */ jsx("div", { className: "sale__bg sale__bg-1366", children: /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "mask-svg",
        width: "1366",
        height: "756",
        viewBox: "0 0 1366 756",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("mask", { id: "mask-1", children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M0 159V24C0 10.7452 10.7452 0 24 0H765C778.255 0 789 10.7452 789 24V132C789 145.255 799.745 156 813 156H1342C1355.25 156 1366 166.745 1366 180V537V731.978C1366 745.241 1355.24 755.99 1341.98 755.978L846.978 755.522C833.732 755.51 823 744.768 823 731.522V561C823 547.745 812.255 537 799 537H24C10.7452 537 0 526.255 0 513V159Z",
              fill: "#ffffff",
              fillOpacity: "1"
            }
          ) }) }),
          /* @__PURE__ */ jsx(
            "image",
            {
              href: "/images/coffee1.jpg",
              width: "100%",
              height: "100%",
              mask: "url(#mask-1)",
              preserveAspectRatio: "xMidYMid slice"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "sale__bg sale__bg-1000", children: /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "mask-svg",
        width: "960",
        height: "761",
        viewBox: "0 0 960 761",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("mask", { id: "mask-2", children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M0 164V24C0 10.7452 10.7452 0 24 0H550.389C563.644 0 574.389 10.7452 574.389 24V150C574.389 163.255 585.135 174 598.389 174H936C949.255 174 960 184.745 960 198V542V736.956C960 750.228 949.228 760.98 935.956 760.956L710.141 760.544C696.903 760.52 686.185 749.782 686.185 736.544V656C686.185 642.745 675.439 632 662.185 632H24C10.7452 632 0 621.255 0 608V164Z",
              fill: "#ffffff",
              fillOpacity: "1"
            }
          ) }) }),
          /* @__PURE__ */ jsx(
            "image",
            {
              href: "/images/coffee.jpg",
              width: "100%",
              height: "100%",
              mask: "url(#mask-2)",
              preserveAspectRatio: "xMidYMid slice"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "sale__bg sale__bg-768", children: /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "mask-svg",
        width: "728",
        height: "881",
        viewBox: "0 0 728 881",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("mask", { id: "mask-3", children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M0 284V24C0 10.7452 10.7452 0 24 0H329.929C343.184 0 353.929 10.7452 353.929 24V118C353.929 131.255 364.674 142 377.929 142H704C717.255 142 728 152.745 728 166V662V856.867C728 870.174 717.174 880.94 703.868 880.867L661.224 880.632C648.021 880.559 637.357 869.835 637.357 856.632V776C637.357 762.745 626.611 752 613.357 752H24C10.7451 752 0 741.255 0 728V284Z",
              fill: "#ffffff",
              fillOpacity: "1"
            }
          ) }) }),
          /* @__PURE__ */ jsx(
            "image",
            {
              href: "/images/coffee.jpg",
              width: "100%",
              height: "100%",
              mask: "url(#mask-3)",
              preserveAspectRatio: "xMidYMid slice"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "sale__bg sale__bg-480", children: /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "mask-svg",
        width: "440",
        height: "379",
        viewBox: "0 0 440 379",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("mask", { id: "mask-4", children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M0 114C0 105.163 7.16344 98 16 98H252C260.837 98 268 90.8366 268 82V16C268 7.16344 275.163 0 284 0H424C432.837 0 440 7.16344 440 16V117.107V278.076V362.948C440 371.804 432.805 378.976 423.948 378.947L385.163 378.821C376.347 378.793 369.215 371.638 369.215 362.821V335.551C369.215 326.715 362.052 319.551 353.215 319.551H16C7.16343 319.551 0 312.388 0 303.551V114Z",
              fillOpacity: "1",
              fill: "#ffffff"
            }
          ) }) }),
          /* @__PURE__ */ jsx(
            "image",
            {
              href: "/images/coffee.jpg",
              width: "100%",
              height: "100%",
              mask: "url(#mask-4)",
              preserveAspectRatio: "xMidYMid slice"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "sale__bg sale__bg-320" }),
    /* @__PURE__ */ jsx(Title, { children: "Скидка 30 %" }),
    /* @__PURE__ */ jsxs("h3", { className: "sale__subtitle", children: [
      /* @__PURE__ */ jsx("span", { children: "На второй и последующие дни" }),
      " при бронировании от 2х и более суток ",
      /* @__PURE__ */ jsx("br", {}),
      "с понедельника по пятницу"
    ] })
  ] }) }) });
};
const logoFooter = "/icons/logo-footer.svg";
function Footer() {
  useState(0);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("footer", { className: "footer", id: "footer", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "footer__wrapper", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer__top", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "logo", children: /* @__PURE__ */ jsx("img", { src: logoFooter, alt: "logo" }) }),
      /* @__PURE__ */ jsx("nav", { className: "footer__menu", children: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#home", children: "О доме" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#location__found", children: "Как добраться" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#prices", children: "Цена" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#exclusive", children: "Дополнительные услуги" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#location", children: "О локации" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#footer", children: "Контакты" }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "footer__contacts", children: [
        /* @__PURE__ */ jsx("h4", { className: "footer__contacts-title", children: "Связаться с нами:" }),
        /* @__PURE__ */ jsxs("div", { className: "footer__contacts-items", children: [
          Icon("phone-footer"),
          Icon("tg-footer"),
          Icon("wa-footer"),
          Icon("mail")
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer__socials", children: [
        /* @__PURE__ */ jsx("h4", { className: "footer__socials-title", children: "Мы в социальных сетях:" }),
        /* @__PURE__ */ jsxs("div", { className: "footer__socials-items", children: [
          Icon("inst"),
          Icon("vk")
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "footer__socials-address", children: [
          'ООО "Усадьба" ',
          /* @__PURE__ */ jsx("br", {}),
          " ",
          /* @__PURE__ */ jsx("br", {}),
          "ИНН 6678119830 ОГРН 1226600027092 ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          "Свердловская область, г. Березовский, ул. Старателей, д. 2-21"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "footer__bottom", children: [
      /* @__PURE__ */ jsx("img", { className: "footer__usov", src: "/images/usov.jpg", alt: "logo" }),
      /* @__PURE__ */ jsxs("p", { className: "footer__it-products", href: "#", children: [
        "Создаём и продвигаем ",
        /* @__PURE__ */ jsx("br", {}),
        "ваши it продукты "
      ] }),
      /* @__PURE__ */ jsx("a", { className: "footer__conf", href: "/documents/Политика_конфиденциальности_Время_Леса_1.pdf", download: true, children: "Политика конфиденциальности" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "footer__modal-container", children: [
      /* @__PURE__ */ jsx("p", { className: "footer__modal-text", children: "Мы создаём веб-сайты сервисы, которые превращают ваш бренд в мощную онлайн-платформу, раскрывая его полный потенциал  " }),
      /* @__PURE__ */ jsxs("div", { className: "footer__modal-row", children: [
        Icon("phone-footer"),
        /* @__PURE__ */ jsx("a", { href: "tel:+79226152393", children: "+7 911 719-71-92" }),
        /* @__PURE__ */ jsx("a", { href: "", children: "usov.site" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer__modal-row", children: [
        Icon("tg-footer"),
        Icon("wa-footer"),
        Icon("mail")
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer__modal-row", children: [
        /* @__PURE__ */ jsx("img", { className: "footer__usov", src: "/images/usov-black.png", alt: "logo" }),
        /* @__PURE__ */ jsxs("p", { className: "footer__it-products", href: "#", children: [
          "Создаём и продвигаем ",
          /* @__PURE__ */ jsx("br", {}),
          "ваши it продукты "
        ] })
      ] })
    ] })
  ] }) }) }) });
}
function App() {
  useState(true);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Promo, {}),
    /* @__PURE__ */ jsx(Booking, {}),
    /* @__PURE__ */ jsx(Home, {}),
    /* @__PURE__ */ jsx(Atmosphere, {}),
    /* @__PURE__ */ jsx(Cosiness, {}),
    /* @__PURE__ */ jsx(Prices, {}),
    /* @__PURE__ */ jsx(Rest, {}),
    /* @__PURE__ */ jsx(Sale, {}),
    /* @__PURE__ */ jsx(Location, {}),
    /* @__PURE__ */ jsx(Exclusive, {}),
    /* @__PURE__ */ jsx(Questions, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function render() {
  const html = ReactDOMServer.renderToString(/* @__PURE__ */ jsx(App, {}));
  return { html };
}
export {
  render
};
