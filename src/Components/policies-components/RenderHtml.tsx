interface RenderHtmlProps{
    htmlDoc:string;
}
export default function RenderHtml({htmlDoc}:RenderHtmlProps){
    return(
        <div className="max-w-3xl mx-auto py-10 px-4 bg-white rounded-2xl">
      <div
        className="prose prose-gray max-w-none text"
        dangerouslySetInnerHTML={{ __html: htmlDoc }}
      />
    </div>
    )
}