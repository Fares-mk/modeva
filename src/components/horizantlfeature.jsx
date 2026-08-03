function horizantlFeature({title,description,icon}) {
    return ( <>
        <div className="bg-gray-200">
            <div className="bg-white border border-gray-200 shadow-sm p-8 m-4 flex items-start gap-5 hover:shadow-md transition">
      <div className="w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center text-white shrink-0">
        {icon}
      </div>

      <div>
        <h3 className="text-3xl font-serif text-gray-800 mb-3">
          {title}
        </h3>

        <p className="text-sm text-gray-500 leading-6">
          {description}
        </p>
      </div>
    </div>
        </div>
    </> );
}

export default horizantlFeature;