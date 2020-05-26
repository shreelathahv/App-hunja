import emojiList from "./emojiList.json";

export default function filterEmoji(searchText, maxResults) {
  return emojiList
    .filter(emoji => {
      if (emoji.keywords.toLowerCase().startsWith('G'.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.startsWith('G')) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}


