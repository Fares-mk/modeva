function vertcalFeature({title,description,icon}) {
    return ( <>
    <div className="bg-gray-200 h-full">
        <div className="bg-white border  border-gray-200 m-4 shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md transition">
      <div className="w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center text-white mb-6">
        {icon}
      </div>

      <h3 className="text-3xl font-serif text-gray-800 leading-tight mb-4">
        {title}
      </h3>

      <p className="text-sm text-gray-500 leading-6">
        {description}
      </p>
    </div>
    </div>
    
    </> );
}

export default vertcalFeature;