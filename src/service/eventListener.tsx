export const AddCursor = () => {
  var cursor = document.querySelector<HTMLElement>(".cursor");

  document.addEventListener("mousemove", (e) => {
    if (cursor) {
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
    }
  });
};

export const TileCursor = () => {
  var cursor = document.querySelector<HTMLElement>(".cursor");
  var tiles = document.querySelectorAll(".tile");
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener("mouseover", () => {
      cursor?.classList.add("cursor--big");
    });

    tiles[i].addEventListener("mouseleave", () => {
      cursor?.classList.remove("cursor--big");
    });
  }
};

export const TileCursorColor = (color: any, element: Element) => {
  var cursor = document.querySelector<HTMLElement>(".cursor");

  var root = document.querySelector(":root");
  if (root) {
    var cursorColor = getComputedStyle(root).getPropertyValue("--cursor-grey");

    element.addEventListener("mouseover", () => {
      if (cursor) cursor.style.backgroundColor = color;
      if (cursor) cursor.style.opacity = "60%";
    });

    element.addEventListener("mouseleave", () => {
      if (cursor) cursor.style.backgroundColor = cursorColor;
      if (cursor) cursor.style.opacity = "100%";
    });
  }
};

export const resetCursor = () => {
  var cursor = document.querySelector<HTMLElement>(".cursor");
  var root = document.querySelector(":root");
  if (root) {
    var cursorColor = getComputedStyle(root).getPropertyValue("--cursor-grey");
    if (cursor) {
      cursor.style.backgroundColor = cursorColor;
      cursor.style.opacity = "100%";
      cursor.classList.remove("cursor--big");
    }
  }
};

export const cursorOnActionBtn = () => {
  var btns = document.querySelectorAll(".btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("mouseover", () => {
      hideCursor(true);
    });
    btns[i].addEventListener("mouseleave", () => {
      hideCursor(false);
    });
  }
};

export const hideCursor = (hide: boolean) => {
  var cursor = document.querySelector<HTMLElement>(".cursor");
  if (cursor) {
    if (hide) {
      cursor.classList.remove("cursor--big");
      cursor.classList.add("cursor--small");
    } else {
      cursor.classList.remove("cursor--small");
      cursor.classList.add("cursor--big");
    }
  }
};

export const removeCursor = (hide: boolean) => {
  var cursor = document.querySelector<HTMLElement>(".cursor");
  if (cursor) {
    if (hide) {
      cursor.classList.remove("cursor--big");
      cursor.classList.add("cursor--none");
    } else {
      cursor.classList.remove("cursor--none");
      cursor.classList.add("cursor--big");
    }
  }
};

export const CursorOnEmail = () => {
  var email = document.querySelector("#email");
  if (!email) return;

  email.addEventListener("mouseover", () => {
    removeCursor(true);
  });

  email.addEventListener("mouseleave", () => {
    removeCursor(false);
  });
};

export const CursorOnBackBtn = () => {
  var backBtns = document.querySelectorAll(".back-btn-hidden");
  var cursor = document.querySelector<HTMLElement>(".cursor");
  var root = document.querySelector(":root");
  if (!backBtns || !cursor) return;

  for (let i = 0; i < backBtns.length; i++) {
    backBtns[i].addEventListener("mouseover", () => {
      removeCursor(true);
      if (cursor) cursor.style.backgroundColor = "#fff";
    });

    backBtns[i].addEventListener("mouseleave", () => {
      removeCursor(false);
      if (root) {
        var cursorColor =
          getComputedStyle(root).getPropertyValue("--cursor-grey");
        if (cursor) cursor.style.backgroundColor = cursorColor;
      }
    });
  }
};

export const CursorOnLink = (id: number, color: string) => {
  var div = document.querySelector('#projectTile' + id + ' > div > div');
  var cursor = document.querySelector<HTMLElement>(".cursor");
  var root = document.documentElement;
  if (!div || !cursor) return;

    div.addEventListener("mouseover", () => {
      removeCursor(true);
      if (root) root.style.setProperty('--project-tile-color', color);
    });

    div.addEventListener("mouseleave", () => {
      removeCursor(false);
      if (root) root.style.setProperty('--project-tile-color', 'transparent');
    });
};
