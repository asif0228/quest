var questionList = [
	// Addition
	["রেজার ৩২টি কাগজ ছিল। মিনা তাকে ২৪টি কাগজ দিল । এখন রেজার কতগুলো কাগজ হলো ?","৫৬","৫৫","৫৭","৫৮"],
	["রেজার ২৮টি কাগজ আছে। মিনার ১৫টি কাগজ আছে। তাদের কাছে মোট কতগুলো কাগজ আছে ?","৪৩","৪০","৪২","৪৪"],
	["শ্রীলংকার জাতীয় ক্রিকেট দলের ১৮ জন খেলোয়াড় বাংলাদেশে খেলতে এসেছেন। বাংলাদেশ দলেও ১৮ জন খেলোয়াড় আছেন। দুই দলে মোট কতজন খেলোয়াড় আছেন ?","৩৬","৩০","৩৫","২২"],
	["একটি বিদ্যালয়ের দ্বিতীয় শ্রেণিতে ২৬ জন ছাত্রী ও ২৫ জন ছাত্র আছে। দ্বিতীয় শ্রেণিতে মোট কত জন শিক্ষার্থী আছে ?","৫১","৫০","৫২","৫৩"],
	["সৃষ্টিদের বাগানে ২৬টি গোলাপ গাছ ও ৩৫টি বেলি গাছ আছে। বাগানে কতগুলো গাছ আছে ?","৬১","৫৯","৬০","৬২"],
	["আলি তাদের গাছ থেকে ২ কাঁদি ডাব পেড়েছে। এক কাঁদিতে ১৯টি ডাব এবং অন্য কাঁদিতে ১৮টি ডাব আছে। একত্রে কতগুলো ডাব আছে ?","৩৭","৩৫","৩৬","৪০"],
	["শান্তিদের পারিবারিক লাইব্রেরিতে গল্পের ৫২টি বই ও ৩৮টি অন্য বিষয়ের বই আছে। লাইব্রেরিতে মোট কতগুলো বই আছে ?","৯০","৮৮","৯২","৯৫"],
	["রাজু বাজার থেকে ৪৫ টাকার মাছ ও ৩৮ টাকার সবজি কিনল। সে মোট কত খরচ করল ?","৮৩","৮০","৮২","৮১"],
	["অনি ও তার বন্ধুরা দুই দলে ২১শে ফেব্রুয়ারির প্রভাত-ফেরিতে গেল। এক দলে ২৯ জন ও অন্য দলে ৩৫ জন আছে। দুই দলে কতজন আছে ?","৬৪","৬২","৬৫","৬১"],
	["রিয়াজ তার চৌবাচ্চায় ৩৫টি শিং মাছ ও ৪৭টি তেলাপিয়া মাছ রাখল । সে কতগুলো মাছ চৌবাচ্চায় রাখল ?","৮২","৮০","৮৫","৮১"],
	["আকাশ তার বাড়ির সামনে দিয়ে সকালে ৪২টি গাড়ি ও বিকালে ৩৯টি গাড়ি যেতে দেখেছে। ঐ দিন বাড়ির সামনে দিয়ে সে কতগুলো গাড়ি যেতে দেখেছে ?","৮১","৮০","৮২","৭৯"],
	["একজন দোকানদার তার দোকানে ক্রেতার সংখ্যা গণনা করেন । প্রথম দিন ৫৬ জন ক্রেতা এসেছিলেন। পরের দিন ৩৪ জন ক্রেতা এসেছিলেন। ওই ২ দিনে তার দোকানে কতজন ক্রেতা এসেছিলেন ?","৯০","৮০","৮৫","৯৫"],
	["২৯ + ৪৩ ?","৭২","৭১","৭৩","৭৪"],
	["৫৬ + ২৭ ?","৮৩","৮০","৮১","৮২"],
	["৩৮ + ৩৪ ?","৭২","৭১","৭৩","৭৪"],
	["১৯ + ২৫ ?","৪৪","৫৫","৪৩","৪২"],
	["৭৬ + ১৮ ?","৯৪","৯৩","৯৫","৯০"],
	["৪৩ + ৩৭ ?","৮০","৯০","৭০","৬৫"],
	["১৮ + ৫২ ?","৭০","৭১","৭২","৭৩"],
	["২৪ + ২৬ ?","৫০","৪৭","৪৮","৪৯"],
	["৪৪ + ৯ ?","৫৩","৫০","৫১","৫২"],
	["৭৬ + ৮ ?","৮৪","৮৫","৮৩","৮২"],
	["৯ + ৮৩ ?","৯২","৯১","৯৩","৯৪"],
	["৫ + ৫৭ ?","৬২","৬৩","৬৪","৬৫"],
	["৩১ + ৯ ?","৪০","৪১","৪২","৪৩"],
	["৪৫ + ৫ ?","৫০","৫১","৫২","৫৩"],
	["৮ + ৮২ ?","৯০","৯১","৯২","৯৩"],
	["২৮ + ৩৭ ?","৬৫","৬২","৬৩","৬৪"],
	["৪৯ + ২৩ ?","৭২","৭১","৭৩","৭৪"],
	["৫৫ + ১৬ ?","৭১","৭২","৭৩","৭৪"],
	["৪৬ + ৩৬ ?","৮২","৮০","৮১","৮৩"],
	["৫৫ + ১৬ ?","৭১","৭০","৭৩","৭৪"],
	["৬৪ + ২৭ ?","৯১","৯০","৯২","৯৩"],
	["৩৫ + ২৯ ?","৬৪","৫৪","৪৪","৭৪"],
	["১৩ + ৭৮ ?","৯১","১০০","৯০","৯৫"],
	["৫৭ + ১৩ ?","৭০","৬৯","৭১","৭২"],
	["৩৮ + ২২ ?","৬০","৬১","৬২","৬৩"],
	["৪৫ + ৩৫ ?","৮০","৬০","৬১","৭৯"],
	["২৬ + ৬৪ ?","৯০","৮৬","৮৭","৮৮"],
	["৩৯ + ৩ ?","৪২","৪১","৪৩","৪৪"],
	["৪৫ + ৭ ?","৫২","৫০","৫১","৫৩"],
	["৬ + ৫৮ ?","৬৪","৬২","৬৩","৬৫"],
	["৫ + ৬৮ ?","৭৩","৭৪","৭৫","৭৬"],
	["৪৭ + ৩ ?","৫০","৪৮","৪৯","৫১"],
	["৮১ + ৯ ?","৯০","৮৮","৮৯","৯১"],
	["২ + ৪৮ ?","৫০","৪৭","৪৮","৪৯"],
	["৬ + ৭৪ ?","৮০","৮১","৮২","৮৩"],
	// Substraction
	["রেজার ৩৭টি কাগজ ছিল। সে এর থেকে মিনাকে ১৪টি কাগজ দিল । রেজার কাছে কতটি কাগজ রইল ?","২৩","২০","২১","২৪"],
	["রেজার ৩৫টি কাগজ ছিল। সে এর থেকে মিনাকে ১৮টি দিল । রেজার কাছে কতটি কাগজ রইল ?","১৭","১৫","১৮","২০"],
	["সোহাগ ৮৫ টাকা নিয়ে বাজারে গেল। সে ৫৩ টাকা খরচ করল । তার কাছে কত টাকা থাকল ?","৩২","৩০","৩১","৩৫"],
	["একটি শ্রেণি কক্ষে ৪৮ জন ছাত্র-ছাত্রী আছে এবং এদের মধ্যে ২৬ জন ছাত্র। সেখানে কতজন ছাত্রী আছে ?","২২","২০","২৫","২৩"],
	["একটি বাগানে ৪৫টি আম গাছ আছে। গাছগুলোর মধ্যে ২৯টিতে আম ধরেছে। কতটি গাছে এখনও আম ধরেনি ?","১৬","১৫","১৪","১২"],
	["সায়লার দশ টাকার নোট ছিল ৮টি। সে ময়নাকে ৩টি দশ টাকার নোট দিল। সায়লার কত টাকা থাকল ?","৫০","৬০","৪০","৫৫"],
	["রুমির ৭৫টি মারবেল আছে এবং রাজুর ৪৭টি মারবেল আছে। রুমির থেকে রাজুর কয়টি মারবেল বেশি বা কম আছে ?","২৪ টি কম আছে","২৪ টি বেশি আছে","২২ টি কম আছে","২২ টি বেশি আছে"],
	["মাহিরের ২৩টি গল্পের বই আছে। অপূর্বের ১৭টি গল্পের বই আছে। মাহিরের থেকে অপূর্বের কয়টি বই বেশি বা কম আছে ?","৬ টি কম আছে","৬ টি বেশি আছে","সমান আছে","৭ টি কম আছে"],
	["মা ও মেয়ের বয়সের যোগফল ৭০। মেয়ের বয়স ২২ বছর। মায়ের বয়স কত ?","৪৮","৪৫","৪৯","৪৭"],
	["রুমুর থেকে ঝুমু ৮ বছরের বড়। ঝুমুর বয়স ২৪ বছর। রুমুর বয়স কত ?","১৬","৩২","৩০","২০"],
	["৪৬ - ১৮ ?","২৮","২৬","২৭","২৯"],
	["৩২ - ১৫ ?","১৭","১৫","১৮","২০"],
	["৬১ - ৩২ ?","২৯","২৫","২৮","৩০"],
	["৭৮ - ৪৯ ?","২৭","২৬","২৫","২৪"],
	["৯৫ - ৬৭ ?","২৮","২৯","৩০","২৭"],
	["৫০ - ১৬ ?","৩৪","৩৩","৩২","৩৫"],
	["৬০ - ২৭ ?","৩৩","৩০","৩১","৩৪"],
	["৮০ - ১৮ ?","৬২","৬০","৬১","৬৫"],
	["৪৩ - ৩৪ ?","৯","৮","৫","১০"],
	["৭৫ - ৬৮ ?","৭","৫","৬","৮"],
	["২৫ - ৮ ?","১৭","১৫","১৪","২০"],
	["৪৩ - ৫ ?","৩৮","৩৫","৩৬","৩৯"],
	["৩০ - ৭ ?","২৩","২৫","২০","১৯"],
	["৬০ - ৬ ?","৫৪","৪৫","৪৪","৫৫"],
	["৮০ - ৯ ?","৭১","৭০","৫৯","১৭"],
	["৮২ - ১৩ ?","৬৯","৭০","৭৯","৬৮"],
	["৭১ - ৪৪ ?","২৭","২৮","২৫","২৬"],
	["৯৭ - ৫৯ ?","৩৮","৩৭","৩৬","৩৯"],
	["৬০ - ৩৫ ?","২৫","২০","২৬","২৪"],
	["৭৪ - ৬৮ ?","৬","৭","৫","৮"],
	["৪০ - ৩৪ ?","৬","৫","৪","৭"],
	["৯৩ - ৫ ?","৮৮","৮৭","৮৬","৮৯"],
	["৫০ - ৩ ?","৪৭","৪৬","৪৫","৪৮"],
	// Addition & substraction relation
	["আমাদের কিছু আপেল ছিল। এর মধ্যে ৫টি বিক্রি করার পর এখন আমাদের ৭টি আপেল আছে। প্রথমে আমাদের কতগুলো আপেল ছিল ?","১২","১০","১১","১৩"],
	["একটি ব্যাগে কয়েকটি আম ছিল। পরে আরও ৫টি আম ব্যাগে রাখা হলো। ব্যাগে মোট আম হলো ১২টি। প্রথমে ব্যাগে কয়টি আম ছিল ?","৭","৮","৫","৬"],
	["আকাশের কাছে ২৪ টাকা ছিল। তার বাবা তাকে কিছু টাকা দেওয়ায় তার ৫৮ টাকা হলো। তার বাবা কত টাকা দিয়েছিলেন ?","৩৪","৩০","২৪","৪০"],
	["বাড়িতে ৩০টি রং পেনসিল ছিল । বুলু সেখান থেকে কয়েকটি পেনসিল বিদ্যালয়ে নিয়ে গেল। বাড়িতে এখন ২২টি রং পেনসিল রয়েছে। বুলু কয়টি রং পেনসিল বিদ্যালয়ে নিয়ে গেছে ?","৮","৯","৫","২২"],
	["বিদ্যালয়ের মাঠে শিশুরা খেলছিল। পরে আরও ৩৮ জন শিশু মাঠে আসল। ফলে মাঠে মোট ৮৬ জন শিশু হলো। প্রথমে কতজন শিশু খেলছিল ?","৪৮","৫০","৫৮","৩৫"],
	["তারিক আম বিক্রি করতে বাজারে গেল । ৩৫টি আম বিক্রি করার পর তার কাছে ১৭টি আম অবশিষ্ট রইল। সে কতগুলো আম বাজারে এনেছিল ?","৫২","৫০","৩৫","৪৫"],
	["১৪ + ___ =৩৭","১৩","১০","১২","১৪"],
	["২৫ + ___ = ৬৩","৩৮","৩৫","৪৮","২৫"],
	["___ + ১৫ = ৪৮","৩৩","২২","৪৩","২৩"],
	["___ + ২৮ = ৭৫","৪৭","৪৮","৫৭","৫৮"],
	["২৯ - ___ = ১২","১৭","১৫","১৮","১৬"],
	["৫১ - ___ = ১৮","৩৩","৩২","৩১","৩০"],
	["___ - ১৩ = ৪৩","৫৬","৫০","৬৫","৫৫"],
	["___ - ৩৬ = ৫৭","৯৩","৯৪","৯০","৯১"]
];