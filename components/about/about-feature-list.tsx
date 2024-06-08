import FeatureTag from "./about-feature-tag"

export default async function FeatureTagList() {
    const featureTags = [
        {name: "5 年", detail: "经验"},
        {name: "本科", detail: "学历"},
        {name: "Vue & React & TS & Java", detail: "主要技术栈"},
        {name: "苏州/昆山", detail: "现居地"},
        {name: "中文 & 英语", detail: "语言"},
    ]

    return (
        <div className="flex flex-col items-start gap-1 md:flex-row md:gap-16">
            {featureTags.map((item, index) => (
                <FeatureTag key={index} name={item.name} detail={item.detail}/>
            ))}
        </div>
    )
}