const pages = document.querySelector(".pages");
const body = document.body;

/* 
   Define the color pattern (per page index)
   Page 1 → index 0 → #E7A1B8  
   Page 2 → index 1 → #333333  
   Page 3 → index 2 → #FDC002  
   Page 4 → index 3 → #333333  
   Page 5 → index 4 → #E7A1B8  
   Page 6 → index 5 → #16610E  
   Page 7 → index 6 → #FDC002  
*/
const pageColors = [
  "#E7A1B8",
  "#333333",
  "#FDC002",
  "#333333",
  "#E7A1B8",
  "#16610E",
  "#FDC002",
  "#333333",
  "#E7A1B8",
  "#16610E"
];

document.querySelectorAll(".index button").forEach(btn => {
  btn.addEventListener("click", () => {
    const pageNumber = Number(btn.dataset.page);

    // Move to selected page
    pages.style.transform = `translateX(-${pageNumber * 100}vw)`;

    // Change background color if a color is defined for that page
    if (pageColors[pageNumber]) {
      body.style.backgroundColor = pageColors[pageNumber];
    }
  });
});
