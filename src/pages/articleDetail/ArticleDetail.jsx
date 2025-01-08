import { BreadCrumb } from '@/components/BreadCrumb'
import { MainLayout } from '@/components/MainLayout'
import { images } from '@/constants';
import React from 'react'
import { Link } from 'react-router-dom';
import { SuggestedPost } from './container/SuggestedPost';

const BreadCrumbData = [
    {name: "Home",link:"/"},
    {name: "Blog",link:"/blog"},
    {name: "Article",link:"/blog/1"},
];

const postData =[
    {
        id:"1",
        image: images.post1,
        title:"Help children get better education",
        createdAt:"2023-01-08T10:00:00Z",
        updatedAt:"",
    },
    {
        id:"1",
        image: images.post1,
        title:"Help children get better education",
        createdAt:"2023-01-08T10:00:00Z",
        updatedAt:"",
    },
    {
        id:"1",
        image: images.post1,
        title:"Help children get better education",
        createdAt:"2023-01-08T10:00:00Z",
        updatedAt:"",
    },
    {
        id:"1",
        image: images.post1,
        title:"Help children get better education",
        createdAt:"2023-01-08T10:00:00Z",
        updatedAt:"",
    },
]

const tagsData = [
    "Medical",
    "Lifestyle",
    "Learn",
    "Healthy",
    "Food",
    "Diet",
    "Education",
]

export const ArticleDetail = () => {
  return (
    <MainLayout>
        <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
            <article className='flex-1'>
                <BreadCrumb data={BreadCrumbData}/>
                <img src={images.post1} alt="Article" className='rounded-xl w-full'/>
                <Link to="/blog?category=selectedCategory" className='text-primary text-sm font-roboto inline-block mt-4 md:text-base'>
                    EDUCATION
                </Link>
                <h1 className='text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]'>Help children get better education</h1>
                <div className='mt-4 text-dark-soft'>
                    <p className='leading-7 '>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo vitae impedit eligendi temporibus corporis illum sunt. Dolorem, debitis a ad inventore id, eum illum possimus, minus molestias consequatur reprehenderit ex perspiciatis voluptatum molestiae quo aliquam accusamus
                         laudantium adipisci. Nam molestias laboriosam tempore itaque sit nulla quas ex quasi inventore praesentium!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, assumenda? Error quo blanditiis, 
                        in laborum corporis asperiores ipsum voluptates mollitia est itaque sunt minima ea recusandae enim quae 
                        commodi! At cumque dolorum aperiam culpa repellendus eligendi. Voluptatem recusandae architecto in est tempora. 
                        Vel aliquam consequatur perspiciatis atque beatae quasi ad.
                    </p>
                </div>
            </article>
            <SuggestedPost header="Latest Articles" posts={postData} tags={tagsData} className="mt-8 lg:mt-0 max-w-xs"/>
        </section>
    </MainLayout>
  )
}
