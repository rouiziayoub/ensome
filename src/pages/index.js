import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import img from "../../public/images/img.png";
import img2 from "../../public/images/img2.png";
import img3 from "../../public/images/img3.png";
import img4 from "../../public/images/img4.png";
import img5 from "../../public/images/img5.png";
import img6 from "../../public/images/img6.png";
import img7 from "../../public/images/img7.png";
import img8 from "../../public/images/img8.png";
import img9 from "../../public/images/img9.png";
import img10 from "../../public/images/img10.png";
import img11 from "../../public/images/img11.png";
import { FaBrain, FaCompressArrowsAlt, FaRegPlayCircle, FaKey, FaArrowRight, FaArrowLeft } from "react-icons/fa";


import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ensome website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section>
          <div className="container">
            <div className="row mx-5 py-5 ">
              <div className="col-md-6 ">
                <h2 className="fs-1 ">
                  Find true power in your data with Ensome
                </h2>
                <p>
                  set ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium,totam rem aperiam,eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.
                </p>
                <button className="btn  btn-primary ">Learn more </button>
                <span className="ms-5 ">
                  <FaRegPlayCircle  /> Watch the demo
                </span>
              </div>
              <div className="col-md-6">
                <Image
                  className="img"
                  src={img}
                  width={450}
                  height={300}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid logos">
            <div className="row row-logo">
              <div className="col-md-12 ">
                <Image
                  className=""
                  src={img2}
                  width={180}
                  height={130}
                  alt="img2"
                />

                <Image src={img3} width={180} height={130} alt={img3} />

                <Image src={img4} width={180} height={130} alt={img4} />

                <Image src={img5} width={180} height={130} alt={img5} />

                <Image src={img6} width={180} height={130} alt={img6} />

                <Image src={img7} width={180} height={130} alt={img7} />
              </div>
            </div>
          </div>
        </section>
        <section className="style py-5">
          <h2 className=" style-h2">Why our clients chosse Ensome? </h2>
          <p className=" py-3 style-p py-2 ">
            Doloremque landantium,totam rem aperiam,eaque ipsa quae ab illo
            inventor veritatis et quasi architecto beatae vitae dicta sunt
            explicabo
          </p>
          <div className="container">
            <div class="row">
              <div class="col-sm-4 mb-3 mb-sm-0">
                <div class="card">
                  <div class="card-body">
                    <button className="text-primary my-4 ms-3 btn-stlyle">
                      <FaBrain/>
                    </button>
                    <h3 class="card-title">Machine learning</h3>
                    <p class="card-text">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis prasentium voluptatum deleniti atque
                      corrupti quos dolores.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <button className="text-primary my-4 ms-3 btn-stlyle">
                      <FaCompressArrowsAlt/>
                    </button>
                    <h3 class="card-title">Embed analytics</h3>
                    <p class="card-text">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis prasentium voluptatum deleniti atque
                      corrupti quos dolores..
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <button className="text-primary my-4 ms-3 btn-stlyle">
                      <FaKey />
                    </button>
                    <h3 class="card-title">Access control</h3>
                    <p class="card-text">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis prasentium voluptatum deleniti atque
                      corrupti quos dolores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row mx-5 py-5 ">
              <div className="col-md-6 ">
                <h2 className="fs-1 ">
                  Find true power in your data with Ensome
                </h2>
                <p>
                  set ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium,totam rem aperiam,eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.
                </p>
                <button className="btn btn-primary ">Learn more </button>
              </div>
              <div className="col-md-6">
                <Image
                  className="img"
                  src={img8}
                  width={450}
                  height={300}
                  alt="img8"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mx-5 py-5">
              <div className="col-md-6">
                <Image
                  className="img"
                  src={img9}
                  width={450}
                  height={300}
                  alt="img9"
                />
              </div>
              <div className="col-md-6 ">
                <h2 className="fs-1 ">
                  Find true power in your data with Ensome
                </h2>
                <p>
                  set ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium,totam rem aperiam,eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.
                </p>
                <button className="btn btn-primary ">Learn more </button>
              </div>
            </div>
          </div>
        </section>
        <section className="style">
          <h2 className="text-center py-4">Glad to help your success</h2>
          <div className="container">
            <div class="row">
              <div class="col-sm-4 mb-3 mb-sm-0">
                <div class="card">
                  <div class="card-body">
                    <p>22 June 2020</p>
                    <h3 class="card-title">
                      Set ut perspiciatis unde omnis at vero blanditils
                    </h3>
                    <p class="card-text">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis prasentium voluptatum deleniti...
                    </p>
                    <div>
                      <button className="bg-white mx-1 text-primary  style-btn">
                        Proxy
                      </button>
                      <button className=" bg-white mx-1 text-primary  style-btn">
                        Vpn{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <p>22 June 2020</p>
                    <h3 class="card-title">
                      Set ut perspiciatis unde omnis at vero blanditils
                    </h3>
                    <p class="card-text">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis prasentium voluptatum deleniti...
                    </p>
                    <div>
                      <button className="bg-white mx-1 text-primary  style-btn">
                        Proxy
                      </button>
                      <button className=" bg-white mx-1 text-primary  style-btn">
                        Vpn
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <p>22 June 2020</p>
                    <h3 class="card-title">
                      Set ut perspiciatis unde omnis at vero blanditils
                    </h3>
                    <p class="card-text">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis prasentium voluptatum deleniti...
                    </p>
                    <div>
                      <button className="bg-white mx-1 text-primary  style-btn">
                        Proxy
                      </button>
                      <button className=" bg-white mx-1 text-primary  style-btn">
                        Vpn
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn my-5 btn-primary btn-btn">Learn more </button>
        </section>
        <section>
          <div className="div d-flex justify-content-evenly align-items-center py-5  me-5">
            <h2 className=" style-section ms-5">
              Trusted by the best in the business
            </h2>
            <div className="ms-5 icon">
              <button className="style-icon">
                <FaArrowLeft className="text-black-50" />
              </button>
              <button className="style-icon">
                <FaArrowRight/>
              </button>
            </div>
          </div>

          <div className="container">
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col-md-6 ">
                <div class="card position-relative shadow-sm ">
                  <Image
                    className="position-absolute top-0 start-0 translate-middle ms-5"
                    src={img11}
                    width={75}
                    height={75}
                    alt="img11"
                  />
                  <p class="card-text mx-4  mt-5">
                    ``Ut enim ad minima veniam ,quis nostrum exercitationem
                    ullam corporis suscipit laboriosam,nisi ut aliquid ex ea
                    commodi consequatur?Quisi autem vel eum iure reprehenderit
                    qui in ea voluplate velit esse quam nihil molestiae
                    consequatur,vel illum. ``
                  </p>
                  <h5 className="card-title mx-4"> Alex Bern</h5>
                  <p className="mx-4"> COE by PixelPerfect</p>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="card  position-relative shadow-sm">
                  <Image
                    className="position-absolute top-0 start-0 translate-middle ms-5"
                    src={img10}
                    width={75}
                    height={75}
                    alt="img10"
                  />
                  <p class="card-text mx-4 mt-5">
                    ``Ut enim ad minima veniam ,quis nostrum exercitationem
                    ullam corporis suscipit laboriosam,nisi ut aliquid ex ea
                    commodi consequatur?Quisi autem vel eum iure reprehenderit
                    qui in ea voluplate velit esse quam nihil molestiae
                    consequatur,vel illum. ``
                  </p>
                  <h5 className="card-title mx-4"> Alex Bern</h5>
                  <p className="mx-4"> COE by NOX</p>
                </div>
              </div>
            </div>
          </div>
          <div className="division mt-5">
            <div className=" container  w-100 m-auto">
              <div className="d-flex justify-content-center align-items-center ">
                <div className="col-md-3   border-end">
                  <h2 className="text-white mx-5">1830+</h2>
                  <p className="text-white mx-5">Project executed</p>
                </div>
                <div className="col-md-3  border-end">
                  <h2 className="text-white mx-5">220</h2>
                  <p className="text-white mx-5">Data analytics</p>
                </div>
                <div className="col-md-3 border-end">
                  <h2 className="text-white mx-5">390</h2>
                  <p className="text-white mx-5">Data management</p>
                </div>
                <div className="col-md-3 mt-3 ">
                  <h2 className=" text-white pt-3 mx-5">834+</h2>
                  <p className="text-white mx-5">Satisfied customers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="conttact">
          <div className="container pt-5">
            <div className="row">
              <div className="col-md-8 offset-md-1">
                <h1 className="title">
                  Left questions? Contacts us now for a free consultation and
                  free trial!
                </h1>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
                </p>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
