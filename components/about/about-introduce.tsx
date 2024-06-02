import Link from "next/link";

export default async function Introduce() {
    return (
        <div className="rounded-lg border p-8 text-content mt-2 w-full  sm:mt-0 sm:rounded-3xl sm:border sm:p-11 text-white text-lg">
            <h1 className="opacity-100">你好, 我是吴尚成！</h1>
            <div className="opacity-65">
                <p className="mt-4">定居昆山千灯，在苏州昆山工作。前端开发5年，后端开发1年。目前是一名全栈开发（vue3 + SpringBoot）。喜欢接触各种新知识，在这几年的开发生涯中，做到了：</p>
                <p className="mt-4">熟练使用Vue全家桶及 TS 进行中大型项目开发，能从0-1实现前端项目的落地，并熟练使用Docker / Nginx上线部署。除此之外还熟悉React 生态，能够独立完成模块级别开发任务，有过中小型项目开发经验。</p>
                <p className="mt-4">除主要工作外，闲暇时间会使用python做些机器学习/脚本自动化等方向的小项目，并且在 <Link className=" text-blue-500" href="https://github.com/FeiYull/TensorRT-Alpha">TensorRT-Alpha（1.2K star | 图像识别）</Link> 有过开源贡献。</p>
                <p className="mt-4">如果您在上海寻找前端 OR 全栈开发，欢迎与我联系！</p>
            </div>
        </div>
    )
}