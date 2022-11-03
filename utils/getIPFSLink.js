export function getIPFSLink(url) {
    const gateway = "https://ipfs.io/ipfs/";
    if (!url) return url;

    const frurl = url
        .replace(/^Qm[1-9A-Za-z]{44}/gm, `${gateway}${url}`)
        .replace("https://ipfs.io/ipfs/", gateway)
        .replace("https://ipfs.infura.io/ipfs/", gateway)
        .replace("ipfs://", gateway);
    return frurl;
}
