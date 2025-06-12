    const circle = document.getElementById("circle");
    const book_list_wrap = document.getElementById("book_list_wrap");
    const boxCount = 10;
    const radius = boxCount * 30; 
    let currentAngle = 0;
    let autoRotate = true;

    const angleStep = 360 / boxCount;

    for (let i = 0; i < boxCount; i++) {
      const box = document.createElement("div");
      box.className = "book_item";
      box.innerText = i + 1;

      const angle = angleStep * i;
      box.style.transform = `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`;

      box.addEventListener("click", () => {
        alert(`Box ${i + 1} clicked!`);
      });

      circle.appendChild(box);
    }

    function updateRotation() {
      circle.style.transform = `rotateY(${currentAngle}deg)`;
    }

    window.addEventListener("wheel", (e) => {
      const direction = e.deltaY > 0 ? 1 : -1;
      currentAngle += angleStep * direction;
      updateRotation();
    });

    // 자동 회전 (정지 상태일 땐 천천히 돈다)
    setInterval(() => {
      if (autoRotate) {
        currentAngle += 0.5;
        updateRotation();
      }
    }, 50);

    // 마우스를 올리면 정위치로 조준하고 멈춤
    book_list_wrap.addEventListener("mouseenter", () => {
      autoRotate = false;
      const snappedAngle = Math.round(currentAngle / angleStep) * angleStep;
      currentAngle = snappedAngle;
      updateRotation();
    });

    // 마우스를 내리면 다시 자동 회전 시작
    book_list_wrap.addEventListener("mouseleave", () => {
      autoRotate = true;
    });   