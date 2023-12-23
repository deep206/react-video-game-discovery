const getCroppedImageUrl = (url: string) => {
    const indexOfMedia = url.indexOf("media/") + "media/".length; //get index of media/ position including itself to slice string
    const newUrl = `${url.slice(0, indexOfMedia)}crop/600/400/${url.slice(indexOfMedia)}`; // add "/crop/width/height" for cropped image dimensions in between the index found
    return newUrl;
}

export default getCroppedImageUrl;