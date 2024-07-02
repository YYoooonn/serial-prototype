export const numRemSliced = 6;
export const arrayRemSliced = Array.from({ length: numRemSliced }, (_, i) => i);

export const arrayLinks = Array.from({ length: 20 }, (_, i) => {
  var str = "" + (i + 2);
  var pad = "000";
  return pad.substring(0, pad.length - str.length) + str;
});
