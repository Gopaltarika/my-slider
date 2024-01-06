import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../assets/first-img.png";
import img2 from "../assets/second-img.png";
import img3 from "../assets/third-img.png"
import star from "../assets/ant-design_star-filled.png";

const Myslider = () => {
    const first = React.useRef(null);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.9,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div>
            <div className="container max-w-[1440px] ml-auto px-[-12px] relative">
                <div>
                    <button className='border-2 border-[#F53838] rounded-full w-[60px] h-[60px] flex items-center justify-center absolute bottom-[-30%] right-[10%]' onClick={() => first?.current?.slickPrev()}
                    ><svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                            <path
                                d="M18.75 7.74986H3.925L8.4625 2.29986C8.67467 2.04459 8.77675 1.71548 8.74628 1.38495C8.7158 1.05442 8.55527 0.74953 8.3 0.537356C8.04473 0.325183 7.71563 0.223106 7.3851 0.25358C7.05456 0.284055 6.74967 0.444586 6.5375 0.699856L0.2875 8.19986C0.245451 8.25951 0.207849 8.32218 0.175 8.38736C0.175 8.44986 0.175 8.48736 0.0875002 8.54986C0.0308421 8.69318 0.0011764 8.84574 0 8.99986C0.0011764 9.15397 0.0308421 9.30653 0.0875002 9.44986C0.0875002 9.51236 0.0874998 9.54986 0.175 9.61236C0.207849 9.67753 0.245451 9.7402 0.2875 9.79986L6.5375 17.2999C6.65503 17.441 6.8022 17.5544 6.96856 17.6322C7.13491 17.71 7.31636 17.7502 7.5 17.7499C7.79207 17.7504 8.07511 17.6487 8.3 17.4624C8.42657 17.3574 8.5312 17.2285 8.60789 17.0831C8.68458 16.9377 8.73183 16.7785 8.74692 16.6148C8.76202 16.4511 8.74466 16.286 8.69586 16.129C8.64705 15.972 8.56775 15.8262 8.4625 15.6999L3.925 10.2499H18.75C19.0815 10.2499 19.3995 10.1182 19.6339 9.88374C19.8683 9.64932 20 9.33138 20 8.99986C20 8.66834 19.8683 8.35039 19.6339 8.11597C19.3995 7.88155 19.0815 7.74986 18.75 7.74986Z"
                                fill="#F53838"
                            />
                        </svg></button>
                </div>
                <div>
                    <button className='border-2 border-[#F53838] rounded-full w-[60px] h-[60px] flex items-center justify-center absolute bottom-[-30%] right-[4%]' onClick={() => first?.current?.slickNext()}
                    ><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.25 13.7499H21.075L16.5375 8.29986C16.3253 8.04459 16.2232 7.71548 16.2537 7.38495C16.2842 7.05442 16.4447 6.74953 16.7 6.53736C16.9553 6.32518 17.2844 6.22311 17.6149 6.25358C17.9454 6.28406 18.2503 6.44459 18.4625 6.69986L24.7125 14.1999C24.7545 14.2595 24.7922 14.3222 24.825 14.3874C24.825 14.4499 24.825 14.4874 24.9125 14.5499C24.9692 14.6932 24.9988 14.8457 25 14.9999C24.9988 15.154 24.9692 15.3065 24.9125 15.4499C24.9125 15.5124 24.9125 15.5499 24.825 15.6124C24.7922 15.6775 24.7545 15.7402 24.7125 15.7999L18.4625 23.2999C18.345 23.441 18.1978 23.5544 18.0314 23.6322C17.8651 23.71 17.6836 23.7502 17.5 23.7499C17.2079 23.7504 16.9249 23.6487 16.7 23.4624C16.5734 23.3574 16.4688 23.2285 16.3921 23.0831C16.3154 22.9377 16.2682 22.7785 16.2531 22.6148C16.238 22.4511 16.2553 22.286 16.3041 22.129C16.3529 21.972 16.4322 21.8262 16.5375 21.6999L21.075 16.2499H6.25C5.91848 16.2499 5.60054 16.1182 5.36612 15.8837C5.13169 15.6493 5 15.3314 5 14.9999C5 14.6683 5.13169 14.3504 5.36612 14.116C5.60054 13.8816 5.91848 13.7499 6.25 13.7499Z" fill="#F53838" />
                        </svg>
                    </button>
                </div>
                <Slider ref={first} {...settings}>
                    <div class="w-[430px] h-[230px] relative">
                        <div class="w-[430px] h-[230px] left-0 top-0 absolute bg-white rounded-[10px] border-2 border-red-500"></div>
                        <div class="w-[182px] h-[50px] left-[30px] top-[30px] absolute">
                            <img class="w-[50px] h-[50px] left-0 top-0 absolute rounded-full" src={img1} />
                            <div class="w-28 h-[18px] left-[70px] top-[6.50px] absolute text-center text-slate-900 text-lg font-medium font-['Rubik'] leading-[30px]">Viezh Robert</div>
                            <div class="w-[101px] h-3.5 left-[71px] top-[29.50px] absolute text-center text-gray-600 text-sm font-normal font-['Rubik'] leading-[30px]">Warsaw, Poland</div>
                        </div>
                        <div class="w-[340px] h-[100px] left-[30px] top-[100px] absolute text-slate-900 text-base font-normal font-['Rubik'] leading-[30px]">“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
                        <div class="w-6 h-4 left-[320px] top-[47.35px] absolute text-slate-900 text-base font-normal font-['Rubik'] leading-[30px]">4.5</div>
                        <div class="w-4 h-4 left-[354px] top-[46.65px] absolute flex-col justify-start items-start inline-flex"><img src={star} alt="star" /></div>
                    </div>
                    <div class="w-[430px] h-[230px] relative">
                        <div class="w-[430px] h-[230px] left-0 top-0 absolute bg-white rounded-[10px] border-2 border-red-500"></div>
                        <div class="w-[182px] h-[50px] left-[30px] top-[30px] absolute">
                            <img class="w-[50px] h-[50px] left-0 top-0 absolute rounded-full" src={img2} />
                            <div class="w-28 h-[18px] left-[70px] top-[6.50px] absolute text-center text-slate-900 text-lg font-medium font-['Rubik'] leading-[30px]">Viezh Robert</div>
                            <div class="w-[101px] h-3.5 left-[71px] top-[29.50px] absolute text-center text-gray-600 text-sm font-normal font-['Rubik'] leading-[30px]">Warsaw, Poland</div>
                        </div>
                        <div class="w-[340px] h-[100px] left-[30px] top-[100px] absolute text-slate-900 text-base font-normal font-['Rubik'] leading-[30px]">“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
                        <div class="w-6 h-4 left-[320px] top-[47.35px] absolute text-slate-900 text-base font-normal font-['Rubik'] leading-[30px]">4.5</div>
                        <div class="w-4 h-4 left-[354px] top-[46.65px] absolute flex-col justify-start items-start inline-flex"><img src={star} alt="star" /></div>
                    </div>
                    <div class="w-[430px] h-[230px] relative">
                        <div class="w-[430px] h-[230px] left-0 top-0 absolute bg-white rounded-[10px] border-2 border-red-500"></div>
                        <div class="w-[182px] h-[50px] left-[30px] top-[30px] absolute">
                            <img class="w-[50px] h-[50px] left-0 top-0 absolute rounded-full" src={img3} />
                            <div class="w-28 h-[18px] left-[70px] top-[6.50px] absolute text-center text-slate-900 text-lg font-medium font-['Rubik'] leading-[30px]">Viezh Robert</div>
                            <div class="w-[101px] h-3.5 left-[71px] top-[29.50px] absolute text-center text-gray-600 text-sm font-normal font-['Rubik'] leading-[30px]">Warsaw, Poland</div>
                        </div>
                        <div class="w-[340px] h-[100px] left-[30px] top-[100px] absolute text-slate-900 text-base font-normal font-['Rubik'] leading-[30px]">“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
                        <div class="w-6 h-4 left-[320px] top-[47.35px] absolute text-slate-900 text-base font-normal font-['Rubik'] leading-[30px]">4.5</div>
                        <div class="w-4 h-4 left-[354px] top-[46.65px] absolute flex-col justify-start items-start inline-flex"><img src={star} alt="star" /></div>
                    </div>
                    <div class="w-[430px] h-[230px] relative">
                        <div class="w-[430px] h-[230px] left-0 top-0 absolute bg-white rounded-[10px] border-2 border-red-500"></div>
                        <div class="w-[182px] h-[50px] left-[30px] top-[30px] absolute">
                            <img class="w-[50px] h-[50px] left-0 top-0 absolute rounded-full" src={img1} />
                            <div class="w-28 h-[18px] left-[70px] top-[6.50px] absolute text-center text-slate-900 text-lg font-medium font-['Rubik'] leading-[30px]">Viezh Robert</div>
                            <div class="w-[101px] h-3.5 left-[71px] top-[29.50px] absolute text-center text-gray-600 text-sm font-normal font-['Rubik'] leading-[30px]">Warsaw, Poland</div>
                        </div>
                        <div class="w-[340px] h-[100px] left-[30px] top-[100px] absolute text-slate-900 text-base font-normal font-['Rubik'] leading-[30px]">“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
                        <div class="w-6 h-4 left-[320px] top-[47.35px] absolute text-slate-900 text-base font-normal font-['Rubik'] leading-[30px]">4.5</div>
                        <div class="w-4 h-4 left-[354px] top-[46.65px] absolute flex-col justify-start items-start inline-flex"><img src={star} alt="star" /></div>
                    </div>
                    <div class="w-[430px] h-[230px] relative">
                        <div class="w-[430px] h-[230px] left-0 top-0 absolute bg-white rounded-[10px] border-2 border-red-500"></div>
                        <div class="w-[182px] h-[50px] left-[30px] top-[30px] absolute">
                            <img class="w-[50px] h-[50px] left-0 top-0 absolute rounded-full" src={img2} />
                            <div class="w-28 h-[18px] left-[70px] top-[6.50px] absolute text-center text-slate-900 text-lg font-medium font-['Rubik'] leading-[30px]">Viezh Robert</div>
                            <div class="w-[101px] h-3.5 left-[71px] top-[29.50px] absolute text-center text-gray-600 text-sm font-normal font-['Rubik'] leading-[30px]">Warsaw, Poland</div>
                        </div>
                        <div class="w-[340px] h-[100px] left-[30px] top-[100px] absolute text-slate-900 text-base font-normal font-['Rubik'] leading-[30px]">“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
                        <div class="w-6 h-4 left-[320px] top-[47.35px] absolute text-slate-900 text-base font-normal font-['Rubik'] leading-[30px]">4.5</div>
                        <div class="w-4 h-4 left-[354px] top-[46.65px] absolute flex-col justify-start items-start inline-flex"><img src={star} alt="star" /></div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Myslider
