// import React from 'react'

// function ScrollCheck() {
//    // this method is called after all the elements of the page have been rendered (after the markup is set on the page)
//    componentDidMount() {
//     this.getBanners();
//     document.addEventListener("scroll", this.trottledBannerInView, true);
//   }

//   componentWillUnmount() {
//     document.removeEventListener("scroll", this.trottledBannerInView, true);
//   }

//   //our function which is called anytime document is scrolling (on scrolling)

//   bannersInViewport = () => {
//     // the banner elements
//     let banner0 = document.getElementById("banner0");
//     let banner1 = document.getElementById("banner1");
//     let banner2 = document.getElementById("banner2");
//     let banner3 = document.getElementById("banner3");
//     let whatsappHelp = document.getElementById("whatsapp-help");

//     // a functions to check if the banner is in view with an offset and banner height to correct for animation bugs
//     function isVisible(el, bannerHeight, offset) {
//       if (el) {
//         // console.log(
//         //   "element:",
//         //   el.getBoundingClientRect().top + offset,
//         //   "<->",
//         //   el.getBoundingClientRect().top + bannerHeight + offset
//         // );

//         return el.getBoundingClientRect().top + offset > 0 &&
//           el.getBoundingClientRect().top + bannerHeight + offset <
//             window.innerHeight
//           ? true
//           : false;
//       } else {
//         return false;
//       }
//     }

//     if (isVisible(banner0, 300, 0) && !this.state.banner0viewed) {
//       // console.log("banner0");
//       axios
//         .post("/bvt", { bannerId: this.state.banners[0].bannerId })
//         .then((res) => {
//           // console.log("success");
//           this.setState({
//             banner0viewed: true,
//           });
//         })
//         .catch((err) => {
//           // console.log(err);
//         });
//     }

//     if (isVisible(banner1, 300, 0) && !this.state.banner1viewed) {
//       // console.log("banner1");
//       axios
//         .post("/bvt", { bannerId: this.state.banners[1].bannerId })
//         .then((res) => {
//           // console.log("success");
//           this.setState({
//             banner1viewed: true,
//           });
//         })
//         .catch((err) => {
//           // console.log(err);
//         });
//     }

//     if (isVisible(banner2, 300, 0) && !this.state.banner2viewed) {
//       // console.log("banner2");
//       axios
//         .post("/bvt", { bannerId: this.state.banners[2].bannerId })
//         .then((res) => {
//           // console.log("success");
//           this.setState({
//             banner2viewed: true,
//           });
//         })
//         .catch((err) => {
//           // console.log(err);
//         });
//     }

//     if (isVisible(banner3, 300, 0) && !this.state.banner3viewed) {
//       // console.log("banner3");
//       axios
//         .post("/bvt", { bannerId: this.state.banners[3].bannerId })
//         .then((res) => {
//           // console.log("success");
//           this.setState({
//             banner3viewed: true,
//           });
//         })
//         .catch((err) => {
//           // console.log(err);
//         });
//     }

//     if (isVisible(whatsappHelp, 300, 0) && !this.state.whtspVis) {
//       this.setState({
//         whtspVis: true,
//       });

//       document.removeEventListener("scroll", this.trottledBannerInView, true);
//     }
//   };

//   getBanners() {
//     axios.post("/homeBanners", { count: 4 }).then((banners) => {
//       this.setState({
//         banners: banners.data,
//       });
//     });
//   }

//   return (
//     <div>

//     </div>
//   )
// }

// export default ScrollCheck
