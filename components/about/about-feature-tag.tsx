interface FeatureTag {
    name: string;
    detail?: string;
}
export default async function FeatureTag({name, detail, ...props}: FeatureTag) {
    return <div className="flex flex-row-reverse items-baseline md:flex-col">
        <dt className="font-bold text-lg">{name}</dt>
        <dd className="w-32 text-sm opacity-75 md:w-auto">{detail}</dd>
    </div>;
}