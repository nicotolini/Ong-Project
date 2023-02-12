const JobDescription = ({ image, jobTitle, country, modality }) => {
  return (
    <div className="container m-auto py-6">
      <div className="flex gap-6">
        <div className="flex-1 bg-white-100 rounded-xl">
          <div className="flex-1 flex flex-col md:flex-row md:items-start items-center pl-[38px] pt-[30px] pb-[40px]">
            <div className="w-[143px] h-[143px] md:text-start text-center">
              <img src={image} alt={jobTitle} className="object-cover w-full" />
            </div>

            <div className="flex flex-col gap-[18px] pl-8">
              <p className="text-black text-[24px] text-center md:text-start">{jobTitle}</p>
              <div className="flex gap-[8px]">
                <div className="flex gap-[4px]">
                  <img src="/locationicon.svg" alt="location-icon" />
                  <span className="text-black text-[20px]">{country}</span>
                </div>
                <div className="flex gap-[4px]">
                  <img src="/clockicon.svg" alt="clock-icon" />
                  <span className="text-black text-[20px]">{modality}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-gray-400 border-solid p-9 pb-12">
            <div className="space-y-6">
              <h3 className="text-[24px]">Job Description</h3>
              <p className="text-[20px]">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing.
              </p>
              <p className="text-[20px]">
                Variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form,
                by injected humour, or randomised words which don't look even slightly believable. If you are going to
                use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <h3 className="text-[24px]">Responsibility</h3>

              <p className="text-[20px]">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-2 h-full flex flex-col space-y-4">
          <div className="bg-white-100 rounded-xl">
            <div className="px-4 py-10 text-[24px]">Job Summary</div>
            <div className="border-t-2 border-gray-400 border-solid">
              <div className="space-y-4 p-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-black rounded-full" />
                  <p className="text-[20px]">Published on: 17 Mei 2022</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-black rounded-full" />
                  <p className="text-[20px]">Salary: 50k - 120k/y</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-black rounded-full" />
                  <p className="text-[20px]">Location: {country}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-black rounded-full" />
                  <p className="text-[20px]">Job Nature: {modality}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-100 rounded-xl flex gap-3 p-4">
            <p>Share: </p>
            <div className="flex gap-3">
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.34651 0.699219H28.672C29.5785 0.699219 30.3 1.42072 30.3 2.32722V28.6712C30.3 29.5592 29.5785 30.2992 28.672 30.2992H21.124V18.8292H24.972L25.5455 14.3707H21.124V11.5217C21.124 10.2267 21.494 9.33872 23.344 9.33872H25.712V5.34272C25.305 5.28722 23.899 5.17622 22.271 5.17622C18.8485 5.17622 16.5175 7.24822 16.5175 11.0777V14.3707H12.651V18.8292H16.5175V30.2992H2.34651C1.91302 30.2992 1.49701 30.1283 1.18875 29.8235C0.880501 29.5187 0.704883 29.1047 0.700012 28.6712V2.32722C0.700012 1.42072 1.44001 0.699219 2.34651 0.699219Z"
                  fill="gray"
                />
              </svg>

              <svg width="31" height="31" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M33.0357 0.3125H3.96429C1.77567 0.3125 0 1.86621 0 3.78125V29.2188C0 31.1338 1.77567 32.6875 3.96429 32.6875H33.0357C35.2243 32.6875 37 31.1338 37 29.2188V3.78125C37 1.86621 35.2243 0.3125 33.0357 0.3125ZM28.9971 11.7883C29.0136 11.9906 29.0136 12.2002 29.0136 12.4025C29.0136 18.668 23.5627 25.8873 13.6025 25.8873C10.5301 25.8873 7.6808 25.1068 5.28571 23.7627C5.72344 23.8061 6.14464 23.8205 6.59063 23.8205C9.12612 23.8205 11.4551 23.0689 13.3134 21.7971C10.9348 21.7537 8.93616 20.3879 8.25067 18.509C9.08482 18.6174 9.83638 18.6174 10.6953 18.4223C8.21763 17.9814 6.35937 16.0736 6.35937 13.7684V13.7105C7.0779 14.0646 7.92031 14.2814 8.80402 14.3104C8.06107 13.8779 7.45202 13.2913 7.03121 12.6028C6.61041 11.9143 6.39095 11.1454 6.39241 10.3646C6.39241 9.48301 6.6567 8.67363 7.12746 7.97266C9.79509 10.8488 13.8007 12.7277 18.2935 12.9301C17.5254 9.71426 20.2757 7.10547 23.5792 7.10547C25.1402 7.10547 26.5442 7.67637 27.5353 8.60137C28.7576 8.39902 29.9304 8.00156 30.971 7.45957C30.5663 8.55801 29.7156 9.48301 28.5924 10.0684C29.6826 9.96719 30.7397 9.6998 31.7143 9.33125C30.9792 10.2779 30.0542 11.1162 28.9971 11.7883Z"
                  fill="gray"
                />
              </svg>

              <svg width="31" height="31" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34.2756 10.5723C34.2567 9.15226 33.9909 7.7463 33.49 6.41734C33.0557 5.29638 32.3923 4.27834 31.5422 3.42828C30.6921 2.57821 29.6741 1.91481 28.5531 1.48047C27.2413 0.988013 25.8553 0.721734 24.4544 0.692969C22.6506 0.612344 22.0788 0.589844 17.5 0.589844C12.9213 0.589844 12.3344 0.589844 10.5438 0.692969C9.14343 0.721945 7.75816 0.988221 6.44688 1.48047C5.32574 1.91451 4.30755 2.5778 3.45745 3.42791C2.60734 4.27801 1.94405 5.2962 1.51001 6.41734C1.01657 7.72822 0.750866 9.1138 0.724385 10.5142C0.64376 12.3198 0.619385 12.8917 0.619385 17.4705C0.619385 22.0492 0.619385 22.6342 0.724385 24.4267C0.75251 25.8292 1.01688 27.213 1.51001 28.5273C1.94478 29.6481 2.60856 30.6659 3.45895 31.5157C4.30934 32.3654 5.32763 33.0284 6.44876 33.4623C7.75645 33.9746 9.14196 34.2599 10.5456 34.3061C12.3513 34.3867 12.9231 34.4111 17.5019 34.4111C22.0806 34.4111 22.6675 34.4111 24.4581 34.3061C25.859 34.2785 27.2451 34.0128 28.5569 33.5205C29.6776 33.0856 30.6953 32.422 31.5453 31.572C32.3953 30.722 33.0589 29.7043 33.4938 28.5836C33.9869 27.2711 34.2513 25.8873 34.2794 24.483C34.36 22.6792 34.3844 22.1073 34.3844 17.5267C34.3806 12.948 34.3806 12.3667 34.2756 10.5723ZM17.4888 26.1292C12.7 26.1292 8.82063 22.2498 8.82063 17.4611C8.82063 12.6723 12.7 8.79297 17.4888 8.79297C19.7877 8.79297 21.9925 9.70622 23.618 11.3318C25.2436 12.9574 26.1569 15.1622 26.1569 17.4611C26.1569 19.76 25.2436 21.9648 23.618 23.5904C21.9925 25.216 19.7877 26.1292 17.4888 26.1292ZM26.5019 10.4936C26.2364 10.4938 25.9734 10.4417 25.7281 10.3402C25.4828 10.2387 25.2598 10.0899 25.0721 9.90213C24.8844 9.71439 24.7355 9.49148 24.634 9.24613C24.5325 9.00079 24.4804 8.73785 24.4806 8.47234C24.4806 8.20703 24.5329 7.94432 24.6344 7.6992C24.736 7.45409 24.8848 7.23137 25.0724 7.04377C25.26 6.85616 25.4827 6.70735 25.7278 6.60582C25.9729 6.50429 26.2356 6.45203 26.5009 6.45203C26.7663 6.45203 27.029 6.50429 27.2741 6.60582C27.5192 6.70735 27.7419 6.85616 27.9295 7.04377C28.1171 7.23137 28.2659 7.45409 28.3675 7.6992C28.469 7.94432 28.5213 8.20703 28.5213 8.47234C28.5213 9.58984 27.6175 10.4936 26.5019 10.4936Z"
                  fill="gray"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
