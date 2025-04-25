const Loading = ()=>{
    return  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
    <div className="relative">
      {/* Outer spinning ring */}
      <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin">
        {/* Inner spinning element */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
      
      {/* Pulsing dot in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
    </div>
    
    {/* Loading text */}
    <p className="mt-6 text-slate-600 font-medium text-sm tracking-wider animate-pulse">
      LOADING
    </p>
  </div>
}

export default Loading;