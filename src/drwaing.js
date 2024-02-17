export const drawReact = (detection, ctx) => {
  detection.forEach((predicition) => {
    const [x, y, width, height] = predicition["bbox"];
    const text = predicition["class"];

    // set the color of the box and the height and width
    const color = "pink";
    ctx.strokestyle = color;
    ctx.font = "20px arial";
    ctx.fillstyle = color;

    // draw the rectangle using the detection prameters

    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};
