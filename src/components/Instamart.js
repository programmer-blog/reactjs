import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="border border-black m-2 p-2"    >
            <h3 className="text-xl">{title}</h3>
            {isVisible
                ? (<button className="cursor-pointer" onClick={() => setIsVisible(false)}>Hide</button>)
                : (<button className="cursor-pointer" onClick={() => setIsVisible(true)}>Show</button>)
            }
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instmart = () => {
    const [visibleSection, setVisibleSection] = useState("about")
    return (
        <div>
            <h1 className="text-3xl p-2 m-2">Instamart</h1>
            <Section title={"About Instamart"}
                description={"Vivamus placerat mi vitae lacus tincidunt, eget semper purus rutrum. Maecenas quis mauris et sapien ultricies placerat. Integer egestas volutpat lectus sit amet tempor. Nulla sit amet justo nulla. Nulla vulputate dui vitae tortor sodales, nec porttitor urna suscipit. Etiam porta, libero sit amet aliquam tempor, tortor leo lacinia dolor, eget tincidunt justo est ac nibh. Suspendisse id ante convallis, dapibus massa sit amet, laoreet risus. Mauris euismod, mauris quis congue finibus, nibh risus congue nisl, sit amet congue diam elit sed nisi. Ut condimentum, mauris eu faucibus cursus, ligula lectus elementum ante, eu accumsan dolor diam quis ipsum. Quisque ornare commodo arcu, sit amet finibus arcu consectetur id. Proin vel justo vel erat aliquam bibendum vitae vitae nulla. Sed sit amet nibh velit. Quisque vulputate auctor erat, at varius augue eleifend quis. Etiam congue velit tortor. Nulla suscipit et nisi eu dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                isVisible={visibleSection == "about"}
                setIsVisible={
                    () => setVisibleSection("about")
                } />
            <Section title={"Team Instamart"} description={"Vivamus placerat mi vitae lacus tincidunt, eget semper purus rutrum. Maecenas quis mauris et sapien ultricies placerat. Integer egestas volutpat lectus sit amet tempor. Nulla sit amet justo nulla. Nulla vulputate dui vitae tortor sodales, nec porttitor urna suscipit. Etiam porta, libero sit amet aliquam tempor, tortor leo lacinia dolor, eget tincidunt justo est ac nibh. Suspendisse id ante convallis, dapibus massa sit amet, laoreet risus. Mauris euismod, mauris quis congue finibus, nibh risus congue nisl, sit amet congue diam elit sed nisi. Ut condimentum, mauris eu faucibus cursus, ligula lectus elementum ante, eu accumsan dolor diam quis ipsum. Quisque ornare commodo arcu, sit amet finibus arcu consectetur id. Proin vel justo vel erat aliquam bibendum vitae vitae nulla. Sed sit amet nibh velit. Quisque vulputate auctor erat, at varius augue eleifend quis. Etiam congue velit tortor. Nulla suscipit et nisi eu dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                isVisible={visibleSection == "team"}
                setIsVisible={
                    () => setVisibleSection("team")
                }
            />
            <Section title={"Career"} description={"Vivamus placerat mi vitae lacus tincidunt, eget semper purus rutrum. Maecenas quis mauris et sapien ultricies placerat. Integer egestas volutpat lectus sit amet tempor. Nulla sit amet justo nulla. Nulla vulputate dui vitae tortor sodales, nec porttitor urna suscipit. Etiam porta, libero sit amet aliquam tempor, tortor leo lacinia dolor, eget tincidunt justo est ac nibh. Suspendisse id ante convallis, dapibus massa sit amet, laoreet risus. Mauris euismod, mauris quis congue finibus, nibh risus congue nisl, sit amet congue diam elit sed nisi. Ut condimentum, mauris eu faucibus cursus, ligula lectus elementum ante, eu accumsan dolor diam quis ipsum. Quisque ornare commodo arcu, sit amet finibus arcu consectetur id. Proin vel justo vel erat aliquam bibendum vitae vitae nulla. Sed sit amet nibh velit. Quisque vulputate auctor erat, at varius augue eleifend quis. Etiam congue velit tortor. Nulla suscipit et nisi eu dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                isVisible={visibleSection == "career"}
                setIsVisible={
                    () => setVisibleSection("career")
                }
            />

            {/* <AboutInstaMart />
            <DetailsofInstamart />
            <Product />
            <Careers /> */}
        </div>
    );
}

export default Instmart;