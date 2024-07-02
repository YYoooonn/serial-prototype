export const numRemSliced = 6;
export const arrayRemSliced = Array.from({ length: numRemSliced }, (_, i) => i);

export const arrayLinks = Array.from({ length: numRemSliced }, (_, i) => {
  var str = "" + (i + 1);
  var pad = "000";
  return pad.substring(0, pad.length - str.length) + str;
});
