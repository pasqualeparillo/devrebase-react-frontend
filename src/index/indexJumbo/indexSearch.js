import React from "react";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
function IndexSearch() {
  let history = useHistory();
  function onSubmit() {
    history.push("/results");
  }
  return (
    <React.Fragment>
      <MediaQuery minWidth={1025}>
        <div
          className="absolute bg-white rounded z-50 left-0 py-6 pr-6 pl-2 mt-0"
          style={{
            width: "calc(30% - 25px)",
            top: "calc(50% - 1rem)",
            transform: "translateY(-50%)"
          }}
        >
          <div className="py-4">
            <p className="text-4xl font-semibold heading">
              Revolutionize your workspace
            </p>
          </div>
          <div className="py-4 ">
            <p className="text-small leading-relaxed subtext">
              Job searching doesn't HAVE to be so hard. One account, one site,
              all the jobs.
            </p>
          </div>
          <div className="py-4 relative">
            <form onSubmit={() => onSubmit()}>
              <input
                className="w-full py-4 px-4 border-black border text-small rounded text-black input-text-black subtext"
                placeholder="Job Title"
                type="text"
              />
              <div
                className="absolute bg-white px-2"
                style={{ left: "1rem", top: ".5rem" }}
              >
                <p className="text-xs text-gray-600 subtext tracking-wider">
                  Find Your Job
                </p>
              </div>

              <motion.button
                className="w-full rounded text-white mt-8 py-4 subtext"
                style={{ backgroundColor: "blue" }}
                whileHover={{ backgroundColor: "darkblue" }}
                whileTap={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                Submit
              </motion.button>
            </form>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={1024}>
        <div
          className="absolute flex flex-col justify-center bg-white rounded z-50 p-6 mt-0 mx-auto"
          style={{
            width: "calc(75%)",
            top: "calc(50)",
            transform: "translateY(50%)"
          }}
        >
          <div className="py-4">
            <p className="md:text-4xl text-xl font-semibold heading">
              Revolutionize your workspace
            </p>
          </div>
          <div className="py-4 ">
            <p className="text-small leading-relaxed subtext">
              Job searching doesn't HAVE to be so hard. One account, one site,
              all the jobs.
            </p>
          </div>
          <div className="py-4 relative">
            <form onSubmit={() => onSubmit()}>
              <input
                className="w-full py-4 px-4 border-black border text-small rounded text-black input-text-black heading"
                placeholder="Job Title"
                type="text"
              />
              <div
                className="absolute bg-white px-2"
                style={{ left: "1rem", top: ".5rem" }}
              >
                <p className="text-xs text-gray-600 subtext">
                  Find your ideal job
                </p>
              </div>

              <motion.button
                className="w-full rounded text-black mt-8 py-4 subtext"
                style={{ backgroundColor: "#ffd460" }}
                whileHover={{ backgroundColor: "#f9ed69" }}
                transition={{ duration: 0.2 }}
              >
                Submit
              </motion.button>
            </form>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={0} maxWidth={767}>
        <div className="relative flex flex-col justify-center bg-white rounded z-50 mt-0 mx-auto w-full">
          <div className="py-4 relative mt-2 w-full">
            <input
              className="w-full py-4 px-4 border-black border text-small rounded text-black input-text-black heading"
              placeholder="Job Title"
              type="text"
            />
            <div
              className="absolute bg-white px-2"
              style={{ left: "1rem", top: ".5rem" }}
            >
              <p className="text-xs text-gray-600 subtext">
                Find your ideal job
              </p>
            </div>

            <motion.button
              className="w-full rounded text-black mt-8 py-4 subtext"
              style={{ backgroundColor: "#ffd460" }}
              whileHover={{ backgroundColor: "#f9ed69" }}
              transition={{ duration: 0.2 }}
            >
              Submit
            </motion.button>
          </div>
        </div>
      </MediaQuery>
    </React.Fragment>
  );
}
export default withRouter(IndexSearch);
