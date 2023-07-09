const tabs = [
  {
    label: "HTML ",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    label: "CSS ",
    content:
      " Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    label: "JS ",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

function component(item) {
  const parentDiv = document.createElement("div");
  const labelIconDiv = document.createElement("div");
  labelIconDiv.textContent = item.label;
  const span = document.createElement("span");

  span.classList.add("accordion-icon");

  labelIconDiv.appendChild(span);

  parentDiv.appendChild(labelIconDiv);

  const content = document.createElement("div");
  content.textContent = item.content;
  content.classList.add('content__hidden')

  parentDiv.appendChild(content);

  span.addEventListener("click", function() {
    console.log("clicked",this);
    if (span.classList.contains("accordion-icon__rotated")) {
      this.setAttribute("aria-hidden", "false");
      this.classList.remove("accordion-icon__rotated");
      content.classList.add('content__hidden')
    } else {
      this.setAttribute("aria-hidden", "true");
      this.classList.add("accordion-icon__rotated");
      content.classList.remove('content__hidden')

    }
  });

  

  return parentDiv;
}

function accordian() {
  const accordian = document.querySelector(".accordian");

  tabs.forEach((item) => {
    const accordianItem = component(item);
    accordian.appendChild(accordianItem);
  });
}

accordian();
