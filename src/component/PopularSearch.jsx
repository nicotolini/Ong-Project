
import React  from 'react'
import Input from './Input'
import { useState } from 'react'
import ButtonPSearch from './ButtonPSearch';

const PopularSearch = () => {
    const [keyword, setKeyword] = useState();
    const [location, setLocation] = useState();
    const [category, setCategory] = useState();
    const [experience, setExperience] = useState();
  return (
    <section className='bg-violet-100 h-[30vh]'>
        <div className='h-full flex flex-col justify-center'>
      <div className='flex gap-4  container mx-auto items-end justify-center'>
        <Input className="w-full max-w-[200px] border mt-1 block  px-3 py-3 bg-transparent font-semibold border-sky-500 rounded-md text-sm shadow-sm  focus:outline-none  text-center"
        placeholder={"Search Keyword"}
        type="text"
        value={keyword}
        handleOnChange={(e) => {setKeyword(e.target.value);}}
        />
        <Input className="w-full max-w-[160px] border mt-1 block  px-3 py-3 bg-transparent font-semibold border-sky-500 rounded-md text-sm shadow-sm  focus:outline-none  text-center"
        placeholder={"Location"}
        type="text"
        value={location}
        handleOnChange={(e) => {setLocation(e.target.value);}}
        />
        <select
              value={category}
              onChange={e =>setCategory(e.target.value)}
              id="gender"
              className="w-full max-w-[160px] h-[46px] border  mt-1 block  px-3  bg-transparent font-semibold border-sky-500 rounded-md text-sm shadow-sm  focus:outline-none  text-center"
            >
              <option hidden>Category</option>
              <option
                value="ui/ux"
              >
                UI/UX
              </option>
              <option
                value=""
              >
                asdasd
              </option>
            </select>
            <select
              value={experience}
              onChange={e =>setExperience(e.target.value)}
              id="gender"
              className="w-full max-w-[200px] h-[46px] border  mt-1 block  px-3  bg-transparent font-semibold  border-sky-500 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none  text-center"
            >
              <option hidden>Select Experience</option>
              <option
                value="1"
              >
                1 Year
              </option>
              <option
                value="2"
              >
                +2 Year
              </option>
              <option
                value="3"
              >
                +3 Year
              </option>
              <option
                value="4"
              >
                +4 Year
              </option>
            </select>
            <button className='px-8 py-[13px] rounded-md text-sm shadow-sm text-white-100 bg-violet-500'>
                Find Job
            </button>
      </div>
      <div className='container mx-auto flex justify-center gap-6 items-center mt-4'>
        <h4 className='font-semibold'>Popular Search:</h4>
        <ButtonPSearch  to="/">
        Marketin
        </ButtonPSearch>

        <ButtonPSearch to="/">
        Telemarketing
        </ButtonPSearch>

        <ButtonPSearch to="/">
        UI/UX
        </ButtonPSearch>

        <ButtonPSearch to="/">
        Programmer
        </ButtonPSearch>
      </div>
      </div>
    </section>
  )
}

export default PopularSearch
