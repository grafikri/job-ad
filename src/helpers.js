export function lowerTurkishCharToUtf8(text) {
  let chars = [
    {
      key: "ğ",
      val: "g"
    },
    {
      key: "ş",
      val: "s"
    },
    {
      key: "ü",
      val: "u"
    },
    {
      key: "ı",
      val: "i"
    },
    {
      key: "ç",
      val: "c"
    },
    {
      key: "ö",
      val: "o"
    }
  ]

  for (let index in chars) {
    let letter = chars[index]
    text = text.replace(new RegExp(letter.key, "g"), letter.val)
  }

  return text
}
