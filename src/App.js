import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Components/Navbar";

import heroTeacher from "./assets/teacher.jpg";
import heroStudent from "./assets/student.jpg";
import heroTransaction from "./assets/transaction.png";

function App() {
    return (
        <>
            <Navbar />
            <section className="flex justify-between relative items-center h-[90vh]">
                <div className="flex flex-col gap-5 justify-center">
                    <span className="pl-[5vw] text-[110px] font-bold">Teach.</span>
                    <span className="pl-[15vw] text-[110px] font-bold">Learn.</span>
                    <span className="pl-[25vw] text-[110px] font-bold">Earn.</span>
                </div>
                <div className="flex gap-4 absolute top-0 right-[10vw]">
                    <div className="bg-[url('./assets/teacher.jpg')] w-[15vw] h-[25vw] bg-cover bg-right hover:bg-center transition-all duration-300" />
                    <div className="mt-[15vh] bg-[url('./assets/student.jpg')] w-[15vw] h-[25vw] bg-cover bg-center hover:bg-right transition-all duration-300" />
                    <div className="mt-[25vh] bg-[url('./assets/transaction.png')] w-[15vw] h-[25vw] bg-cover bg-center hover:bg-right transition-all duration-300" />
                </div>
            </section>
            <div className="flex justify-center gap-20 w-[100vw]">
                <Link
                    to="/student"
                    htmlFor="button"
                    type="button"
                    className="rounded-lg bg-green px-6 py-1 h-[fit-content] text-[4vh]"
                >
                    Become a student 🧑‍🎓
                </Link>
                <Link
                    to="/teacher"
                    htmlFor="button"
                    type="button"
                    className=" rounded-lg bg-green px-6 py-1 h-[fit-content] text-[4vh]"
                >
                    Become a Teacher 👨‍🏫
                </Link>
            </div>
            <div className="my-[10vh]">
                <hr className="my-[100px] mx-auto w-[90vw]" />
                <section className="mx-auto w-[90vw]" id="lte">
                    <article className="flex flex-col">
                        <h1 className="text-[92px]">Learn to earn ?</h1>
                        <p>
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The point
                            of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English. Many desktop publishing
                            packages and web page editors now use Lorem Ipsum as their default
                            model text, and a search for 'lorem ipsum' will uncover many web
                            sites still in their infancy. Various versions have evolved over the
                            years, sometimes by accident, sometimes on purpose (injected humour
                            and the like).
                        </p>
                    </article>
                </section>
                <hr className="my-[100px] mx-auto w-[90vw]" />
                <section className="mx-auto w-[90vw]" id="nft">
                    <article className="flex flex-col">
                        <h1 className="text-[92px]">Non fongible tokens</h1>
                        <p>
                            Anyone can become a learner. Just create an account by logging in to
                            a MetaMask account and you will have access to the courses offered
                            by our teachers. The series of courses in which you participate will
                            lead you to a final test. Passing this test is mandatory to obtain
                            the NFT and access to the more premium course series. There are 4
                            different categories of NFTs: iron, bronze, silver and gold. Each of
                            these categories offers you more or less benefits.{" "}
                        </p>
                    </article>
                </section>
                <hr className="my-[100px] mx-auto w-[90vw]" />
                <section className="mx-auto w-[90vw]" id="learner">
                    <article className="flex flex-col">
                        <h1 className="text-[92px]">Learners</h1>
                        <p>
                            Anyone can become a learner. Just create an account by logging in to
                            a MetaMask account and you will have access to the courses offered
                            by our teachers. The series of courses in which you participate will
                            lead you to a final test. Passing this test is mandatory to obtain
                            the NFT and access to the more premium course series. There are 4
                            different categories of NFTs: iron, bronze, silver and gold. Each of
                            these categories offers you more or less benefits.{" "}
                        </p>
                    </article>
                </section>
                <hr className="my-[100px] mx-auto w-[90vw]" />
                <section className="mx-auto w-[90vw]" id="teacher">
                    <article className="flex flex-col">
                        <h1 className="text-[92px]">Teachers</h1>
                        <p>
                            People who have knowledge and would like to share it can register as
                            teachers. All you have to do is log in with a MetaMask account. You
                            will be paid according to the royalties that the NFTs delivered
                            during your series of courses generate. Just like learners, teachers
                            unlock NFTs based on learners' reviews and the hours they teach.
                            Teachers' NFTs give access to conferences, talks or invitations to
                            private parties. They can also be sold.
                        </p>
                    </article>
                </section>
            </div>
        </>
    );
}

export default App;
