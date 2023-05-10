import React from "react";
import "../style.css";

function ProgressBar({ questionId }) {
  const progress = document.getElementById("progress");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const circles = document.querySelectorAll(".circle");

  let currentActive = 1;
  console.log("currentActive from outside" + currentActive);
  const onNext = () => {
    if (questionId > circles.length) {
      questionId = circles.length;
    }

    update();
  };

  //console.log(next);
  // if (next) {
  //   next.addEventListener("click", () => {
  //     //currentActive++;
  //     //console.log("currentActive" + currentActive);

  //     // if (currentActive > circles.length) {
  //     //   currentActive = circles.length;
  //     // }
  //     if (questionId > circles.length) {
  //       questionId = circles.length;
  //     }

  //     update();
  //   });
  // }

  // if (prev) {
  //   prev.addEventListener("click", () => {
  //    // currentActive--;

  //     if (currentActive < 1) {
  //       currentActive = 1;
  //     }

  //     update();
  //   });
  // }

  function update() {
    circles.forEach((circle, idx) => {
      if (++idx < currentActive) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
    });
    const actives = document.querySelectorAll(".active");
    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
    if (currentActive === 1) {
      prev.disabled = true;
    } else if (currentActive === circles.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  }

  return (
    <div>
      <div className="container">
        <div className="progress-container">
          <div className="progress" id="progress">
            {" "}
          </div>

          {/* <div className={questionId === 1 ? "circle active" : "circle"}>1</div>
          <div className={questionId === 2 ? "circle active" : "circle"}>2</div>
          <div className={questionId === 3 ? "circle active" : "circle"}>3</div>
          <div className={questionId === 4 ? "circle active" : "circle"}>4</div> */}

          <div className="circle active">1</div>
          <div className="circle">2</div>
          <div className="circle">3</div>
          <div className="circle">4</div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
