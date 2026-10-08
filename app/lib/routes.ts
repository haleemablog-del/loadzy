export type LoadzyRoute = {
  from: string;
  to: string;
  fromSlug: string;
  toSlug: string;
};

const rawLoadzyRoutes: LoadzyRoute[] = [
  {
    from: "Chennai",
    to: "Bangalore",
    fromSlug: "chennai",
    toSlug: "bangalore",
  },
  {
    from: "Bangalore",
    to: "Chennai",
    fromSlug: "bangalore",
    toSlug: "chennai",
  },
  {
    from: "Chennai",
    to: "Hyderabad",
    fromSlug: "chennai",
    toSlug: "hyderabad",
  },
  {
    from: "Hyderabad",
    to: "Chennai",
    fromSlug: "hyderabad",
    toSlug: "chennai",
  },
  {
    from: "Bangalore",
    to: "Hyderabad",
    fromSlug: "bangalore",
    toSlug: "hyderabad",
  },
  {
    from: "Hyderabad",
    to: "Bangalore",
    fromSlug: "hyderabad",
    toSlug: "bangalore",
  },
  {
    from: "Coimbatore",
    to: "Bangalore",
    fromSlug: "coimbatore",
    toSlug: "bangalore",
  },
  {
    from: "Bangalore",
    to: "Kochi",
    fromSlug: "bangalore",
    toSlug: "kochi",
  },
  {
    from: "Chennai",
    to: "Kochi",
    fromSlug: "chennai",
    toSlug: "kochi",
  },
  {
    from: "Coimbatore",
    to: "Kochi",
    fromSlug: "coimbatore",
    toSlug: "kochi",
  },
  {
    from: "Chennai",
    to: "Vijayawada",
    fromSlug: "chennai",
    toSlug: "vijayawada",
  },
  {
    from: "Bangalore",
    to: "Tirupati",
    fromSlug: "bangalore",
    toSlug: "tirupati",
  },
    {
    from: "Chennai",
    to: "Coimbatore",
    fromSlug: "chennai",
    toSlug: "coimbatore",
  },
  {
    from: "Coimbatore",
    to: "Chennai",
    fromSlug: "coimbatore",
    toSlug: "chennai",
  },
  {
    from: "Chennai",
    to: "Madurai",
    fromSlug: "chennai",
    toSlug: "madurai",
  },
  {
    from: "Madurai",
    to: "Chennai",
    fromSlug: "madurai",
    toSlug: "chennai",
  },
  {
    from: "Chennai",
    to: "Salem",
    fromSlug: "chennai",
    toSlug: "salem",
  },
  {
    from: "Salem",
    to: "Chennai",
    fromSlug: "salem",
    toSlug: "chennai",
  },
  {
    from: "Chennai",
    to: "Tirupattur",
    fromSlug: "chennai",
    toSlug: "tirupattur",
  },
  {
    from: "Tirupattur",
    to: "Chennai",
    fromSlug: "tirupattur",
    toSlug: "chennai",
  },
  {
    from: "Chennai",
    to: "Vellore",
    fromSlug: "chennai",
    toSlug: "vellore",
  },
  {
    from: "Vellore",
    to: "Chennai",
    fromSlug: "vellore",
    toSlug: "chennai",
  },
  {
    from: "Bangalore",
    to: "Salem",
    fromSlug: "bangalore",
    toSlug: "salem",
  },
  {
    from: "Salem",
    to: "Bangalore",
    fromSlug: "salem",
    toSlug: "bangalore",
  },
  {
    from: "Bangalore",
    to: "Hosur",
    fromSlug: "bangalore",
    toSlug: "hosur",
  },
  {
    from: "Hosur",
    to: "Bangalore",
    fromSlug: "hosur",
    toSlug: "bangalore",
  },
  {
    from: "Coimbatore",
    to: "Mysore",
    fromSlug: "coimbatore",
    toSlug: "mysore",
  },
  {
    from: "Mysore",
    to: "Coimbatore",
    fromSlug: "mysore",
    toSlug: "coimbatore",
  },
  {
    from: "Kochi",
    to: "Chennai",
    fromSlug: "kochi",
    toSlug: "chennai",
  },
  {
    from: "Kochi",
    to: "Coimbatore",
    fromSlug: "kochi",
    toSlug: "coimbatore",
  },
  {
    from: "Kochi",
    to: "Bangalore",
    fromSlug: "kochi",
    toSlug: "bangalore",
  },
    {
    from: "Chennai",
    to: "Tirupati",
    fromSlug: "chennai",
    toSlug: "tirupati",
  },
  {
    from: "Tirupati",
    to: "Chennai",
    fromSlug: "tirupati",
    toSlug: "chennai",
  },
  {
    from: "Bangalore",
    to: "Vijayawada",
    fromSlug: "bangalore",
    toSlug: "vijayawada",
  },
  {
    from: "Vijayawada",
    to: "Bangalore",
    fromSlug: "vijayawada",
    toSlug: "bangalore",
  },
  {
    from: "Chennai",
    to: "Nellore",
    fromSlug: "chennai",
    toSlug: "nellore",
  },
  {
    from: "Nellore",
    to: "Chennai",
    fromSlug: "nellore",
    toSlug: "chennai",
  },
  
  
  
  
  {
    from: "Chennai",
    to: "Warangal",
    fromSlug: "chennai",
    toSlug: "warangal",
  },
  {
    from: "Warangal",
    to: "Chennai",
    fromSlug: "warangal",
    toSlug: "chennai",
  },
    {
    from: "Madurai",
    to: "Kochi",
    fromSlug: "madurai",
    toSlug: "kochi",
  },
  {
    from: "Kochi",
    to: "Madurai",
    fromSlug: "kochi",
    toSlug: "madurai",
  },
  {
    from: "Salem",
    to: "Kochi",
    fromSlug: "salem",
    toSlug: "kochi",
  },
  {
    from: "Kochi",
    to: "Salem",
    fromSlug: "kochi",
    toSlug: "salem",
  },
  {
    from: "Coimbatore",
    to: "Thrissur",
    fromSlug: "coimbatore",
    toSlug: "thrissur",
  },
  {
    from: "Thrissur",
    to: "Coimbatore",
    fromSlug: "thrissur",
    toSlug: "coimbatore",
  },
  {
    from: "Bangalore",
    to: "Thrissur",
    fromSlug: "bangalore",
    toSlug: "thrissur",
  },
  {
    from: "Thrissur",
    to: "Bangalore",
    fromSlug: "thrissur",
    toSlug: "bangalore",
  },
  {
    from: "Bangalore",
    to: "Kozhikode",
    fromSlug: "bangalore",
    toSlug: "kozhikode",
  },
  {
    from: "Kozhikode",
    to: "Bangalore",
    fromSlug: "kozhikode",
    toSlug: "bangalore",
  },
  {
    from: "Chennai",
    to: "Thiruvananthapuram",
    fromSlug: "chennai",
    toSlug: "thiruvananthapuram",
  },
  {
    from: "Thiruvananthapuram",
    to: "Chennai",
    fromSlug: "thiruvananthapuram",
    toSlug: "chennai",
  },
    {
    from: "Mysore",
    to: "Bangalore",
    fromSlug: "mysore",
    toSlug: "bangalore",
  },
  {
    from: "Bangalore",
    to: "Mysore",
    fromSlug: "bangalore",
    toSlug: "mysore",
  },
  {
    from: "Mysore",
    to: "Kochi",
    fromSlug: "mysore",
    toSlug: "kochi",
  },
  {
    from: "Kochi",
    to: "Mysore",
    fromSlug: "kochi",
    toSlug: "mysore",
  },
  {
    from: "Mysore",
    to: "Kozhikode",
    fromSlug: "mysore",
    toSlug: "kozhikode",
  },
  {
    from: "Kozhikode",
    to: "Mysore",
    fromSlug: "kozhikode",
    toSlug: "mysore",
  },
  {
    from: "Bangalore",
    to: "Kannur",
    fromSlug: "bangalore",
    toSlug: "kannur",
  },
  {
    from: "Kannur",
    to: "Bangalore",
    fromSlug: "kannur",
    toSlug: "bangalore",
  },
    
  {
    from: "Tirupati",
    to: "Bangalore",
    fromSlug: "tirupati",
    toSlug: "bangalore",
  },
  {
    from: "Bangalore",
    to: "Nellore",
    fromSlug: "bangalore",
    toSlug: "nellore",
  },
  {
    from: "Nellore",
    to: "Bangalore",
    fromSlug: "nellore",
    toSlug: "bangalore",
  },
  {
    from: "Bangalore",
    to: "Kurnool",
    fromSlug: "bangalore",
    toSlug: "kurnool",
  },
  {
    from: "Kurnool",
    to: "Bangalore",
    fromSlug: "kurnool",
    toSlug: "bangalore",
  },
  {
    from: "Bangalore",
    to: "Anantapur",
    fromSlug: "bangalore",
    toSlug: "anantapur",
  },
  {
    from: "Anantapur",
    to: "Bangalore",
    fromSlug: "anantapur",
    toSlug: "bangalore",
  },
  {
    from: "Bangalore",
    to: "Warangal",
    fromSlug: "bangalore",
    toSlug: "warangal",
  },
  {
    from: "Warangal",
    to: "Bangalore",
    fromSlug: "warangal",
    toSlug: "bangalore",
  },
  
  
    
  
  
  
  
  
  
  
  
  
  
  
    
  
  
  
  
  
  
  
  
  
  
    
  
  
  
  
  
  
  
  
  
  
    {
    from: "Chennai",
    to: "Tiruchirappalli",
    fromSlug: "chennai",
    toSlug: "tiruchirappalli",
  },
  {
    from: "Tiruchirappalli",
    to: "Chennai",
    fromSlug: "tiruchirappalli",
    toSlug: "chennai",
  },
  {
    from: "Chennai",
    to: "Tirunelveli",
    fromSlug: "chennai",
    toSlug: "tirunelveli",
  },
  {
    from: "Tirunelveli",
    to: "Chennai",
    fromSlug: "tirunelveli",
    toSlug: "chennai",
  },
  {
    from: "Chennai",
    to: "Thoothukudi",
    fromSlug: "chennai",
    toSlug: "thoothukudi",
  },
  {
    from: "Thoothukudi",
    to: "Chennai",
    fromSlug: "thoothukudi",
    toSlug: "chennai",
  },
  {
    from: "Coimbatore",
    to: "Madurai",
    fromSlug: "coimbatore",
    toSlug: "madurai",
  },
  {
    from: "Madurai",
    to: "Coimbatore",
    fromSlug: "madurai",
    toSlug: "coimbatore",
  },
  {
    from: "Coimbatore",
    to: "Salem",
    fromSlug: "coimbatore",
    toSlug: "salem",
  },
  {
    from: "Salem",
    to: "Coimbatore",
    fromSlug: "salem",
    toSlug: "coimbatore",
  },
  {
    from: "Madurai",
    to: "Tirunelveli",
    fromSlug: "madurai",
    toSlug: "tirunelveli",
  },
  {
    from: "Tirunelveli",
    to: "Madurai",
    fromSlug: "tirunelveli",
    toSlug: "madurai",
  },  {
    from: "Chennai",
    to: "Hosur",
    fromSlug: "chennai",
    toSlug: "hosur",
  },
  {
    from: "Hosur",
    to: "Chennai",
    fromSlug: "hosur",
    toSlug: "chennai",
  },
  {
    from: "Vellore",
    to: "Bangalore",
    fromSlug: "vellore",
    toSlug: "bangalore",
  },
  {
    from: "Bangalore",
    to: "Vellore",
    fromSlug: "bangalore",
    toSlug: "vellore",
  },
  {
    from: "Tirupattur",
    to: "Bangalore",
    fromSlug: "tirupattur",
    toSlug: "bangalore",
  },
  {
    from: "Bangalore",
    to: "Tirupattur",
    fromSlug: "bangalore",
    toSlug: "tirupattur",
  },
  {
    from: "Salem",
    to: "Hosur",
    fromSlug: "salem",
    toSlug: "hosur",
  },
  {
    from: "Hosur",
    to: "Salem",
    fromSlug: "hosur",
    toSlug: "salem",
  },
  {
    from: "Coimbatore",
    to: "Mangalore",
    fromSlug: "coimbatore",
    toSlug: "mangalore",
  },
  {
    from: "Mangalore",
    to: "Coimbatore",
    fromSlug: "mangalore",
    toSlug: "coimbatore",
  },  {
    from: "Tirupattur",
    to: "Kochi",
    fromSlug: "tirupattur",
    toSlug: "kochi",
  },
  {
    from: "Kochi",
    to: "Tirupattur",
    fromSlug: "kochi",
    toSlug: "tirupattur",
  },
  {
    from: "Salem",
    to: "Palakkad",
    fromSlug: "salem",
    toSlug: "palakkad",
  },
  {
    from: "Palakkad",
    to: "Salem",
    fromSlug: "palakkad",
    toSlug: "salem",
  },
  {
    from: "Coimbatore",
    to: "Palakkad",
    fromSlug: "coimbatore",
    toSlug: "palakkad",
  },
  {
    from: "Palakkad",
    to: "Coimbatore",
    fromSlug: "palakkad",
    toSlug: "coimbatore",
  },
  {
    from: "Madurai",
    to: "Thiruvananthapuram",
    fromSlug: "madurai",
    toSlug: "thiruvananthapuram",
  },
  {
    from: "Thiruvananthapuram",
    to: "Madurai",
    fromSlug: "thiruvananthapuram",
    toSlug: "madurai",
  },
  {
    from: "Tirunelveli",
    to: "Thiruvananthapuram",
    fromSlug: "tirunelveli",
    toSlug: "thiruvananthapuram",
  },
  {
    from: "Thiruvananthapuram",
    to: "Tirunelveli",
    fromSlug: "thiruvananthapuram",
    toSlug: "tirunelveli",
  },  {
    from: "Vellore",
    to: "Tirupati",
    fromSlug: "vellore",
    toSlug: "tirupati",
  },
  {
    from: "Tirupati",
    to: "Vellore",
    fromSlug: "tirupati",
    toSlug: "vellore",
  },
  {
    from: "Chennai",
    to: "Kadapa",
    fromSlug: "chennai",
    toSlug: "kadapa",
  },
  {
    from: "Kadapa",
    to: "Chennai",
    fromSlug: "kadapa",
    toSlug: "chennai",
  },
  {
    from: "Chennai",
    to: "Kurnool",
    fromSlug: "chennai",
    toSlug: "kurnool",
  },
  {
    from: "Kurnool",
    to: "Chennai",
    fromSlug: "kurnool",
    toSlug: "chennai",
  },
  
  {
    from: "Vijayawada",
    to: "Chennai",
    fromSlug: "vijayawada",
    toSlug: "chennai",
  },
  {
    from: "Chennai",
    to: "Guntur",
    fromSlug: "chennai",
    toSlug: "guntur",
  },
  {
    from: "Guntur",
    to: "Chennai",
    fromSlug: "guntur",
    toSlug: "chennai",
  },
  {
    from: "Chennai",
    to: "Visakhapatnam",
    fromSlug: "chennai",
    toSlug: "visakhapatnam",
  },
  {
    from: "Visakhapatnam",
    to: "Chennai",
    fromSlug: "visakhapatnam",
    toSlug: "chennai",
  },  {
    from: "Chennai",
    to: "Nizamabad",
    fromSlug: "chennai",
    toSlug: "nizamabad",
  },
  {
    from: "Nizamabad",
    to: "Chennai",
    fromSlug: "nizamabad",
    toSlug: "chennai",
  },
  {
    from: "Chennai",
    to: "Karimnagar",
    fromSlug: "chennai",
    toSlug: "karimnagar",
  },
  {
    from: "Karimnagar",
    to: "Chennai",
    fromSlug: "karimnagar",
    toSlug: "chennai",
  },
  {
    from: "Chennai",
    to: "Khammam",
    fromSlug: "chennai",
    toSlug: "khammam",
  },
  {
    from: "Khammam",
    to: "Chennai",
    fromSlug: "khammam",
    toSlug: "chennai",
  },
  
    {
    from: "Vaniyambadi",
    to: "Chennai",
    fromSlug: "vaniyambadi",
    toSlug: "chennai",
  },
  {
    from: "Chennai",
    to: "Vaniyambadi",
    fromSlug: "chennai",
    toSlug: "vaniyambadi",
  },
  {
    from: "Vaniyambadi",
    to: "Bangalore",
    fromSlug: "vaniyambadi",
    toSlug: "bangalore",
  },
  {
    from: "Bangalore",
    to: "Vaniyambadi",
    fromSlug: "bangalore",
    toSlug: "vaniyambadi",
  },
    {
    from: "Vaniyambadi",
    to: "Vellore",
    fromSlug: "vaniyambadi",
    toSlug: "vellore",
  },
  {
    from: "Vellore",
    to: "Vaniyambadi",
    fromSlug: "vellore",
    toSlug: "vaniyambadi",
  },
  {
    from: "Vaniyambadi",
    to: "Krishnagiri",
    fromSlug: "vaniyambadi",
    toSlug: "krishnagiri",
  },
  {
    from: "Krishnagiri",
    to: "Vaniyambadi",
    fromSlug: "krishnagiri",
    toSlug: "vaniyambadi",
  },
  {
    from: "Vaniyambadi",
    to: "Hosur",
    fromSlug: "vaniyambadi",
    toSlug: "hosur",
  },
  {
    from: "Hosur",
    to: "Vaniyambadi",
    fromSlug: "hosur",
    toSlug: "vaniyambadi",
  },
  {
    from: "Vaniyambadi",
    to: "Salem",
    fromSlug: "vaniyambadi",
    toSlug: "salem",
  },
  {
    from: "Salem",
    to: "Vaniyambadi",
    fromSlug: "salem",
    toSlug: "vaniyambadi",
  },
  {
    from: "Vaniyambadi",
    to: "Tirupattur",
    fromSlug: "vaniyambadi",
    toSlug: "tirupattur",
  },
  {
    from: "Tirupattur",
    to: "Vaniyambadi",
    fromSlug: "tirupattur",
    toSlug: "vaniyambadi",
  },
  {
    from: "Vaniyambadi",
    to: "Ambur",
    fromSlug: "vaniyambadi",
    toSlug: "ambur",
  },
  {
    from: "Ambur",
    to: "Vaniyambadi",
    fromSlug: "ambur",
    toSlug: "vaniyambadi",
  },
  {
    from: "Vaniyambadi",
    to: "Gudiyatham",
    fromSlug: "vaniyambadi",
    toSlug: "gudiyatham",
  },
  {
    from: "Gudiyatham",
    to: "Vaniyambadi",
    fromSlug: "gudiyatham",
    toSlug: "vaniyambadi",
  },
  {
    from: "Vaniyambadi",
    to: "Alangayam",
    fromSlug: "vaniyambadi",
    toSlug: "alangayam",
  },
  {
    from: "Alangayam",
    to: "Vaniyambadi",
    fromSlug: "alangayam",
    toSlug: "vaniyambadi",
  },
  {
    from: "Vaniyambadi",
    to: "Polur",
    fromSlug: "vaniyambadi",
    toSlug: "polur",
  },
  {
    from: "Polur",
    to: "Vaniyambadi",
    fromSlug: "polur",
    toSlug: "vaniyambadi",
  },
  {
    from: "Vaniyambadi",
    to: "Kuppam",
    fromSlug: "vaniyambadi",
    toSlug: "kuppam",
  },
  {
    from: "Kuppam",
    to: "Vaniyambadi",
    fromSlug: "kuppam",
    toSlug: "vaniyambadi",
  },
  {
    from: "Vaniyambadi",
    to: "Dharmapuri",
    fromSlug: "vaniyambadi",
    toSlug: "dharmapuri",
  },
  {
    from: "Dharmapuri",
    to: "Vaniyambadi",
    fromSlug: "dharmapuri",
    toSlug: "vaniyambadi",
  },
  {
    from: "Vaniyambadi",
    to: "Thiruvannamalai",
    fromSlug: "vaniyambadi",
    toSlug: "thiruvannamalai",
  },
  {
    from: "Thiruvannamalai",
    to: "Vaniyambadi",
    fromSlug: "thiruvannamalai",
    toSlug: "vaniyambadi",
  },
  {
    from: "Vaniyambadi",
    to: "Tirupati",
    fromSlug: "vaniyambadi",
    toSlug: "tirupati",
  },
  {
    from: "Tirupati",
    to: "Vaniyambadi",
    fromSlug: "tirupati",
    toSlug: "vaniyambadi",
  },
    // Ambur Routes
  {
    from: "Ambur",
    fromSlug: "ambur",
    to: "Chennai",
    toSlug: "chennai",
  },
  {
    from: "Chennai",
    fromSlug: "chennai",
    to: "Ambur",
    toSlug: "ambur",
  },
  {
    from: "Ambur",
    fromSlug: "ambur",
    to: "Bangalore",
    toSlug: "bangalore",
  },
  {
    from: "Bangalore",
    fromSlug: "bangalore",
    to: "Ambur",
    toSlug: "ambur",
  },
  {
    from: "Ambur",
    fromSlug: "ambur",
    to: "Vellore",
    toSlug: "vellore",
  },
  {
    from: "Vellore",
    fromSlug: "vellore",
    to: "Ambur",
    toSlug: "ambur",
  },
  
  {
    from: "Vaniyambadi",
    fromSlug: "vaniyambadi",
    to: "Ambur",
    toSlug: "ambur",
  },
  {
    from: "Ambur",
    fromSlug: "ambur",
    to: "Tirupattur",
    toSlug: "tirupattur",
  },
  {
    from: "Tirupattur",
    fromSlug: "tirupattur",
    to: "Ambur",
    toSlug: "ambur",
  },
  {
    from: "Ambur",
    fromSlug: "ambur",
    to: "Krishnagiri",
    toSlug: "krishnagiri",
  },
  {
    from: "Krishnagiri",
    fromSlug: "krishnagiri",
    to: "Ambur",
    toSlug: "ambur",
  },
  {
    from: "Ambur",
    fromSlug: "ambur",
    to: "Hosur",
    toSlug: "hosur",
  },
  {
    from: "Hosur",
    fromSlug: "hosur",
    to: "Ambur",
    toSlug: "ambur",
  },
  {
    from: "Ambur",
    fromSlug: "ambur",
    to: "Salem",
    toSlug: "salem",
  },
  {
    from: "Salem",
    fromSlug: "salem",
    to: "Ambur",
    toSlug: "ambur",
  },
  {
    from: "Ambur",
    fromSlug: "ambur",
    to: "Dharmapuri",
    toSlug: "dharmapuri",
  },
  {
    from: "Dharmapuri",
    fromSlug: "dharmapuri",
    to: "Ambur",
    toSlug: "ambur",
  },
  {
    from: "Ambur",
    fromSlug: "ambur",
    to: "Jolarpettai",
    toSlug: "jolarpettai",
  },
  {
    from: "Jolarpettai",
    fromSlug: "jolarpettai",
    to: "Ambur",
    toSlug: "ambur",
  },
  {
    from: "Ambur",
    fromSlug: "ambur",
    to: "Gudiyatham",
    toSlug: "gudiyatham",
  },
  {
    from: "Gudiyatham",
    fromSlug: "gudiyatham",
    to: "Ambur",
    toSlug: "ambur",
  },
  {
    from: "Ambur",
    fromSlug: "ambur",
    to: "Alangayam",
    toSlug: "alangayam",
  },
  {
    from: "Alangayam",
    fromSlug: "alangayam",
    to: "Ambur",
    toSlug: "ambur",
  },
  {
    from: "Ambur",
    fromSlug: "ambur",
    to: "Kuppam",
    toSlug: "kuppam",
  },
  {
    from: "Kuppam",
    fromSlug: "kuppam",
    to: "Ambur",
    toSlug: "ambur",
  },
  {
    from: "Ambur",
    fromSlug: "ambur",
    to: "Tirupati",
    toSlug: "tirupati",
  },
  {
    from: "Tirupati",
    fromSlug: "tirupati",
    to: "Ambur",
    toSlug: "ambur",
  },
  {
    from: "Ambur",
    fromSlug: "ambur",
    to: "Thiruvannamalai",
    toSlug: "thiruvannamalai",
  },
  {
    from: "Thiruvannamalai",
    fromSlug: "thiruvannamalai",
    to: "Ambur",
    toSlug: "ambur",
  },
    // Major City Routes

  {
    from: "Chennai",
    to: "Tiruppur",
    fromSlug: "chennai",
    toSlug: "tiruppur",
  },
  {
    from: "Tiruppur",
    to: "Chennai",
    fromSlug: "tiruppur",
    toSlug: "chennai",
  },

  {
    from: "Chennai",
    to: "Erode",
    fromSlug: "chennai",
    toSlug: "erode",
  },
  {
    from: "Erode",
    to: "Chennai",
    fromSlug: "erode",
    toSlug: "chennai",
  },

  {
    from: "Chennai",
    to: "Mysore",
    fromSlug: "chennai",
    toSlug: "mysore",
  },
  {
    from: "Mysore",
    to: "Chennai",
    fromSlug: "mysore",
    toSlug: "chennai",
  },

  {
    from: "Chennai",
    to: "Mangalore",
    fromSlug: "chennai",
    toSlug: "mangalore",
  },
  {
    from: "Mangalore",
    to: "Chennai",
    fromSlug: "mangalore",
    toSlug: "chennai",
  },

  {
    from: "Bangalore",
    to: "Coimbatore",
    fromSlug: "bangalore",
    toSlug: "coimbatore",
  },
  {
    from: "Coimbatore",
    to: "Tiruppur",
    fromSlug: "coimbatore",
    toSlug: "tiruppur",
  },
  {
    from: "Tiruppur",
    to: "Coimbatore",
    fromSlug: "tiruppur",
    toSlug: "coimbatore",
  },

  {
    from: "Bangalore",
    to: "Tiruppur",
    fromSlug: "bangalore",
    toSlug: "tiruppur",
  },
  {
    from: "Tiruppur",
    to: "Bangalore",
    fromSlug: "tiruppur",
    toSlug: "bangalore",
  },

  {
    from: "Bangalore",
    to: "Erode",
    fromSlug: "bangalore",
    toSlug: "erode",
  },
  {
    from: "Erode",
    to: "Bangalore",
    fromSlug: "erode",
    toSlug: "bangalore",
  },

  {
    from: "Bangalore",
    to: "Madurai",
    fromSlug: "bangalore",
    toSlug: "madurai",
  },
  {
    from: "Madurai",
    to: "Bangalore",
    fromSlug: "madurai",
    toSlug: "bangalore",
  },

  {
    from: "Bangalore",
    to: "Mangalore",
    fromSlug: "bangalore",
    toSlug: "mangalore",
  },
  {
    from: "Mangalore",
    to: "Bangalore",
    fromSlug: "mangalore",
    toSlug: "bangalore",
  },

  {
    from: "Bangalore",
    to: "Hyderabad",
    fromSlug: "bangalore",
    toSlug: "hyderabad",
  },

  {
    from: "Hyderabad",
    to: "Vijayawada",
    fromSlug: "hyderabad",
    toSlug: "vijayawada",
  },
  {
    from: "Vijayawada",
    to: "Hyderabad",
    fromSlug: "vijayawada",
    toSlug: "hyderabad",
  },

  {
    from: "Hyderabad",
    to: "Visakhapatnam",
    fromSlug: "hyderabad",
    toSlug: "visakhapatnam",
  },
  {
    from: "Visakhapatnam",
    to: "Hyderabad",
    fromSlug: "visakhapatnam",
    toSlug: "hyderabad",
  },

  {
    from: "Vijayawada",
    to: "Visakhapatnam",
    fromSlug: "vijayawada",
    toSlug: "visakhapatnam",
  },
  {
    from: "Visakhapatnam",
    to: "Vijayawada",
    fromSlug: "visakhapatnam",
    toSlug: "vijayawada",
  },

  {
    from: "Kochi",
    to: "Thiruvananthapuram",
    fromSlug: "kochi",
    toSlug: "thiruvananthapuram",
  },
  {
    from: "Thiruvananthapuram",
    to: "Kochi",
    fromSlug: "thiruvananthapuram",
    toSlug: "kochi",
  },
    // Major Tamil Nadu Routes - Batch 1

  {
    from: "Chennai",
    to: "Dindigul",
    fromSlug: "chennai",
    toSlug: "dindigul",
  },
  {
    from: "Dindigul",
    to: "Chennai",
    fromSlug: "dindigul",
    toSlug: "chennai",
  },

  {
    from: "Chennai",
    to: "Thanjavur",
    fromSlug: "chennai",
    toSlug: "thanjavur",
  },
  {
    from: "Thanjavur",
    to: "Chennai",
    fromSlug: "thanjavur",
    toSlug: "chennai",
  },

  {
    from: "Chennai",
    to: "Kumbakonam",
    fromSlug: "chennai",
    toSlug: "kumbakonam",
  },
  {
    from: "Kumbakonam",
    to: "Chennai",
    fromSlug: "kumbakonam",
    toSlug: "chennai",
  },

  {
    from: "Chennai",
    to: "Cuddalore",
    fromSlug: "chennai",
    toSlug: "cuddalore",
  },
  {
    from: "Cuddalore",
    to: "Chennai",
    fromSlug: "cuddalore",
    toSlug: "chennai",
  },

  {
    from: "Chennai",
    to: "Tiruvannamalai",
    fromSlug: "chennai",
    toSlug: "tiruvannamalai",
  },
  {
    from: "Tiruvannamalai",
    to: "Chennai",
    fromSlug: "tiruvannamalai",
    toSlug: "chennai",
  },

  {
    from: "Chennai",
    to: "Kanchipuram",
    fromSlug: "chennai",
    toSlug: "kanchipuram",
  },
  {
    from: "Kanchipuram",
    to: "Chennai",
    fromSlug: "kanchipuram",
    toSlug: "chennai",
  },

  {
    from: "Coimbatore",
    to: "Tiruchirappalli",
    fromSlug: "coimbatore",
    toSlug: "tiruchirappalli",
  },
  {
    from: "Tiruchirappalli",
    to: "Coimbatore",
    fromSlug: "tiruchirappalli",
    toSlug: "coimbatore",
  },

  {
    from: "Madurai",
    to: "Salem",
    fromSlug: "madurai",
    toSlug: "salem",
  },
  {
    from: "Salem",
    to: "Madurai",
    fromSlug: "salem",
    toSlug: "madurai",
  },

  {
    from: "Madurai",
    to: "Tiruchirappalli",
    fromSlug: "madurai",
    toSlug: "tiruchirappalli",
  },
  {
    from: "Tiruchirappalli",
    to: "Madurai",
    fromSlug: "tiruchirappalli",
    toSlug: "madurai",
  },

  {
    from: "Salem",
    to: "Tiruchirappalli",
    fromSlug: "salem",
    toSlug: "tiruchirappalli",
  },
  {
    from: "Tiruchirappalli",
    to: "Salem",
    fromSlug: "tiruchirappalli",
    toSlug: "salem",
  },
    // Major Tamil Nadu Routes - Batch 1

  {
    from: "Chennai",
    to: "Dindigul",
    fromSlug: "chennai",
    toSlug: "dindigul",
  },
  {
    from: "Dindigul",
    to: "Chennai",
    fromSlug: "dindigul",
    toSlug: "chennai",
  },

  {
    from: "Chennai",
    to: "Thanjavur",
    fromSlug: "chennai",
    toSlug: "thanjavur",
  },
  {
    from: "Thanjavur",
    to: "Chennai",
    fromSlug: "thanjavur",
    toSlug: "chennai",
  },

  {
    from: "Chennai",
    to: "Kumbakonam",
    fromSlug: "chennai",
    toSlug: "kumbakonam",
  },
  {
    from: "Kumbakonam",
    to: "Chennai",
    fromSlug: "kumbakonam",
    toSlug: "chennai",
  },

  {
    from: "Chennai",
    to: "Cuddalore",
    fromSlug: "chennai",
    toSlug: "cuddalore",
  },
  {
    from: "Cuddalore",
    to: "Chennai",
    fromSlug: "cuddalore",
    toSlug: "chennai",
  },

  {
    from: "Chennai",
    to: "Tiruvannamalai",
    fromSlug: "chennai",
    toSlug: "tiruvannamalai",
  },
  {
    from: "Tiruvannamalai",
    to: "Chennai",
    fromSlug: "tiruvannamalai",
    toSlug: "chennai",
  },

  {
    from: "Chennai",
    to: "Kanchipuram",
    fromSlug: "chennai",
    toSlug: "kanchipuram",
  },
  {
    from: "Kanchipuram",
    to: "Chennai",
    fromSlug: "kanchipuram",
    toSlug: "chennai",
  },

  {
    from: "Coimbatore",
    to: "Tiruchirappalli",
    fromSlug: "coimbatore",
    toSlug: "tiruchirappalli",
  },
  {
    from: "Tiruchirappalli",
    to: "Coimbatore",
    fromSlug: "tiruchirappalli",
    toSlug: "coimbatore",
  },

  {
    from: "Madurai",
    to: "Salem",
    fromSlug: "madurai",
    toSlug: "salem",
  },
  {
    from: "Salem",
    to: "Madurai",
    fromSlug: "salem",
    toSlug: "madurai",
  },

  {
    from: "Madurai",
    to: "Tiruchirappalli",
    fromSlug: "madurai",
    toSlug: "tiruchirappalli",
  },
  {
    from: "Tiruchirappalli",
    to: "Madurai",
    fromSlug: "tiruchirappalli",
    toSlug: "madurai",
  },

  {
    from: "Salem",
    to: "Tiruchirappalli",
    fromSlug: "salem",
    toSlug: "tiruchirappalli",
  },
  {
    from: "Tiruchirappalli",
    to: "Salem",
    fromSlug: "tiruchirappalli",
    toSlug: "salem",
  },
  // Major Tamil Nadu Routes - Batch 2
{ from: "Chennai", to: "Dharmapuri", fromSlug: "chennai", toSlug: "dharmapuri" },
{ from: "Dharmapuri", to: "Chennai", fromSlug: "dharmapuri", toSlug: "chennai" },

{ from: "Chennai", to: "Krishnagiri", fromSlug: "chennai", toSlug: "krishnagiri" },
{ from: "Krishnagiri", to: "Chennai", fromSlug: "krishnagiri", toSlug: "chennai" },

{ from: "Chennai", to: "Ramanathapuram", fromSlug: "chennai", toSlug: "ramanathapuram" },
{ from: "Ramanathapuram", to: "Chennai", fromSlug: "ramanathapuram", toSlug: "chennai" },

{ from: "Chennai", to: "Sivakasi", fromSlug: "chennai", toSlug: "sivakasi" },
{ from: "Sivakasi", to: "Chennai", fromSlug: "sivakasi", toSlug: "chennai" },

{ from: "Chennai", to: "Virudhunagar", fromSlug: "chennai", toSlug: "virudhunagar" },
{ from: "Virudhunagar", to: "Chennai", fromSlug: "virudhunagar", toSlug: "chennai" },

{ from: "Coimbatore", to: "Dindigul", fromSlug: "coimbatore", toSlug: "dindigul" },
{ from: "Dindigul", to: "Coimbatore", fromSlug: "dindigul", toSlug: "coimbatore" },

{ from: "Coimbatore", to: "Karur", fromSlug: "coimbatore", toSlug: "karur" },
{ from: "Karur", to: "Coimbatore", fromSlug: "karur", toSlug: "coimbatore" },

{ from: "Coimbatore", to: "Thanjavur", fromSlug: "coimbatore", toSlug: "thanjavur" },
{ from: "Thanjavur", to: "Coimbatore", fromSlug: "thanjavur", toSlug: "coimbatore" },

{ from: "Madurai", to: "Dindigul", fromSlug: "madurai", toSlug: "dindigul" },
{ from: "Dindigul", to: "Madurai", fromSlug: "dindigul", toSlug: "madurai" },

{ from: "Madurai", to: "Thanjavur", fromSlug: "madurai", toSlug: "thanjavur" },
{ from: "Thanjavur", to: "Madurai", fromSlug: "thanjavur", toSlug: "madurai" },
// Major Tamil Nadu Routes - Batch 3
{ from: "Chennai", to: "Namakkal", fromSlug: "chennai", toSlug: "namakkal" },
{ from: "Namakkal", to: "Chennai", fromSlug: "namakkal", toSlug: "chennai" },

{ from: "Chennai", to: "Karur", fromSlug: "chennai", toSlug: "karur" },
{ from: "Karur", to: "Chennai", fromSlug: "karur", toSlug: "chennai" },

{ from: "Chennai", to: "Nagercoil", fromSlug: "chennai", toSlug: "nagercoil" },
{ from: "Nagercoil", to: "Chennai", fromSlug: "nagercoil", toSlug: "chennai" },

{ from: "Chennai", to: "Theni", fromSlug: "chennai", toSlug: "theni" },
{ from: "Theni", to: "Chennai", fromSlug: "theni", toSlug: "chennai" },

{ from: "Chennai", to: "Pudukkottai", fromSlug: "chennai", toSlug: "pudukkottai" },
{ from: "Pudukkottai", to: "Chennai", fromSlug: "pudukkottai", toSlug: "chennai" },

{ from: "Chennai", to: "Sivaganga", fromSlug: "chennai", toSlug: "sivaganga" },
{ from: "Sivaganga", to: "Chennai", fromSlug: "sivaganga", toSlug: "chennai" },

{ from: "Chennai", to: "Nagapattinam", fromSlug: "chennai", toSlug: "nagapattinam" },
{ from: "Nagapattinam", to: "Chennai", fromSlug: "nagapattinam", toSlug: "chennai" },

{ from: "Chennai", to: "Mayiladuthurai", fromSlug: "chennai", toSlug: "mayiladuthurai" },
{ from: "Mayiladuthurai", to: "Chennai", fromSlug: "mayiladuthurai", toSlug: "chennai" },

{ from: "Chennai", to: "Ooty", fromSlug: "chennai", toSlug: "ooty" },
{ from: "Ooty", to: "Chennai", fromSlug: "ooty", toSlug: "chennai" },

{ from: "Chennai", to: "Pollachi", fromSlug: "chennai", toSlug: "pollachi" },
{ from: "Pollachi", to: "Chennai", fromSlug: "pollachi", toSlug: "chennai" },

{ from: "Chennai", to: "Karaikudi", fromSlug: "chennai", toSlug: "karaikudi" },
{ from: "Karaikudi", to: "Chennai", fromSlug: "karaikudi", toSlug: "chennai" },
// Major Tamil Nadu Routes - Batch 4
{ from: "Coimbatore", to: "Erode", fromSlug: "coimbatore", toSlug: "erode" },
{ from: "Erode", to: "Coimbatore", fromSlug: "erode", toSlug: "coimbatore" },

{ from: "Coimbatore", to: "Namakkal", fromSlug: "coimbatore", toSlug: "namakkal" },
{ from: "Namakkal", to: "Coimbatore", fromSlug: "namakkal", toSlug: "coimbatore" },

{ from: "Coimbatore", to: "Karur", fromSlug: "coimbatore", toSlug: "karur" },
{ from: "Karur", to: "Coimbatore", fromSlug: "karur", toSlug: "coimbatore" },

{ from: "Coimbatore", to: "Salem", fromSlug: "coimbatore", toSlug: "salem" },
{ from: "Salem", to: "Coimbatore", fromSlug: "salem", toSlug: "coimbatore" },

{ from: "Coimbatore", to: "Madurai", fromSlug: "coimbatore", toSlug: "madurai" },
{ from: "Madurai", to: "Coimbatore", fromSlug: "madurai", toSlug: "coimbatore" },

{ from: "Madurai", to: "Tiruppur", fromSlug: "madurai", toSlug: "tiruppur" },
{ from: "Tiruppur", to: "Madurai", fromSlug: "tiruppur", toSlug: "madurai" },

{ from: "Madurai", to: "Theni", fromSlug: "madurai", toSlug: "theni" },
{ from: "Theni", to: "Madurai", fromSlug: "theni", toSlug: "madurai" },

{ from: "Madurai", to: "Ramanathapuram", fromSlug: "madurai", toSlug: "ramanathapuram" },
{ from: "Ramanathapuram", to: "Madurai", fromSlug: "ramanathapuram", toSlug: "madurai" },

{ from: "Madurai", to: "Sivaganga", fromSlug: "madurai", toSlug: "sivaganga" },
{ from: "Sivaganga", to: "Madurai", fromSlug: "sivaganga", toSlug: "madurai" },

{ from: "Madurai", to: "Virudhunagar", fromSlug: "madurai", toSlug: "virudhunagar" },
{ from: "Virudhunagar", to: "Madurai", fromSlug: "virudhunagar", toSlug: "madurai" },
// Major Tamil Nadu Routes - Batch 5
{ from: "Salem", to: "Namakkal", fromSlug: "salem", toSlug: "namakkal" },
{ from: "Namakkal", to: "Salem", fromSlug: "namakkal", toSlug: "salem" },

{ from: "Salem", to: "Erode", fromSlug: "salem", toSlug: "erode" },
{ from: "Erode", to: "Salem", fromSlug: "erode", toSlug: "salem" },

{ from: "Salem", to: "Dharmapuri", fromSlug: "salem", toSlug: "dharmapuri" },
{ from: "Dharmapuri", to: "Salem", fromSlug: "dharmapuri", toSlug: "salem" },

{ from: "Salem", to: "Krishnagiri", fromSlug: "salem", toSlug: "krishnagiri" },
{ from: "Krishnagiri", to: "Salem", fromSlug: "krishnagiri", toSlug: "salem" },

{ from: "Salem", to: "Tiruppur", fromSlug: "salem", toSlug: "tiruppur" },
{ from: "Tiruppur", to: "Salem", fromSlug: "tiruppur", toSlug: "salem" },

{ from: "Tiruchirappalli", to: "Thanjavur", fromSlug: "tiruchirappalli", toSlug: "thanjavur" },
{ from: "Thanjavur", to: "Tiruchirappalli", fromSlug: "thanjavur", toSlug: "tiruchirappalli" },

{ from: "Tiruchirappalli", to: "Kumbakonam", fromSlug: "tiruchirappalli", toSlug: "kumbakonam" },
{ from: "Kumbakonam", to: "Tiruchirappalli", fromSlug: "kumbakonam", toSlug: "tiruchirappalli" },

{ from: "Tiruchirappalli", to: "Karur", fromSlug: "tiruchirappalli", toSlug: "karur" },
{ from: "Karur", to: "Tiruchirappalli", fromSlug: "karur", toSlug: "tiruchirappalli" },

{ from: "Tiruchirappalli", to: "Pudukkottai", fromSlug: "tiruchirappalli", toSlug: "pudukkottai" },
{ from: "Pudukkottai", to: "Tiruchirappalli", fromSlug: "pudukkottai", toSlug: "tiruchirappalli" },

{ from: "Tiruchirappalli", to: "Dindigul", fromSlug: "tiruchirappalli", toSlug: "dindigul" },
{ from: "Dindigul", to: "Tiruchirappalli", fromSlug: "dindigul", toSlug: "tiruchirappalli" },
// Major Tamil Nadu Routes - Batch 6
{ from: "Chennai", to: "Tiruppur", fromSlug: "chennai", toSlug: "tiruppur" },
{ from: "Tiruppur", to: "Chennai", fromSlug: "tiruppur", toSlug: "chennai" },

{ from: "Chennai", to: "Erode", fromSlug: "chennai", toSlug: "erode" },
{ from: "Erode", to: "Chennai", fromSlug: "erode", toSlug: "chennai" },

{ from: "Chennai", to: "Thoothukudi", fromSlug: "chennai", toSlug: "thoothukudi" },
{ from: "Thoothukudi", to: "Chennai", fromSlug: "thoothukudi", toSlug: "chennai" },

{ from: "Chennai", to: "Tiruvannamalai", fromSlug: "chennai", toSlug: "tiruvannamalai" },
{ from: "Tiruvannamalai", to: "Chennai", fromSlug: "tiruvannamalai", toSlug: "chennai" },

{ from: "Coimbatore", to: "Tirunelveli", fromSlug: "coimbatore", toSlug: "tirunelveli" },
{ from: "Tirunelveli", to: "Coimbatore", fromSlug: "tirunelveli", toSlug: "coimbatore" },

{ from: "Coimbatore", to: "Thoothukudi", fromSlug: "coimbatore", toSlug: "thoothukudi" },
{ from: "Thoothukudi", to: "Coimbatore", fromSlug: "thoothukudi", toSlug: "coimbatore" },

{ from: "Madurai", to: "Tirunelveli", fromSlug: "madurai", toSlug: "tirunelveli" },
{ from: "Tirunelveli", to: "Madurai", fromSlug: "tirunelveli", toSlug: "madurai" },

{ from: "Madurai", to: "Thoothukudi", fromSlug: "madurai", toSlug: "thoothukudi" },
{ from: "Thoothukudi", to: "Madurai", fromSlug: "thoothukudi", toSlug: "madurai" },

{ from: "Tirunelveli", to: "Nagercoil", fromSlug: "tirunelveli", toSlug: "nagercoil" },
{ from: "Nagercoil", to: "Tirunelveli", fromSlug: "nagercoil", toSlug: "tirunelveli" },

{ from: "Tirunelveli", to: "Thoothukudi", fromSlug: "tirunelveli", toSlug: "thoothukudi" },
{ from: "Thoothukudi", to: "Tirunelveli", fromSlug: "thoothukudi", toSlug: "tirunelveli" },
// Major Tamil Nadu Routes - Batch 7
{ from: "Vellore", to: "Chennai", fromSlug: "vellore", toSlug: "chennai" },
{ from: "Chennai", to: "Vellore", fromSlug: "chennai", toSlug: "vellore" },

{ from: "Vellore", to: "Coimbatore", fromSlug: "vellore", toSlug: "coimbatore" },
{ from: "Coimbatore", to: "Vellore", fromSlug: "coimbatore", toSlug: "vellore" },

{ from: "Vellore", to: "Salem", fromSlug: "vellore", toSlug: "salem" },
{ from: "Salem", to: "Vellore", fromSlug: "salem", toSlug: "vellore" },

{ from: "Vellore", to: "Tiruvannamalai", fromSlug: "vellore", toSlug: "tiruvannamalai" },
{ from: "Tiruvannamalai", to: "Vellore", fromSlug: "tiruvannamalai", toSlug: "vellore" },

{ from: "Tirupattur", to: "Vellore", fromSlug: "tirupattur", toSlug: "vellore" },
{ from: "Vellore", to: "Tirupattur", fromSlug: "vellore", toSlug: "tirupattur" },

{ from: "Tirupattur", to: "Salem", fromSlug: "tirupattur", toSlug: "salem" },
{ from: "Salem", to: "Tirupattur", fromSlug: "salem", toSlug: "tirupattur" },

{ from: "Hosur", to: "Salem", fromSlug: "hosur", toSlug: "salem" },
{ from: "Salem", to: "Hosur", fromSlug: "salem", toSlug: "hosur" },

{ from: "Hosur", to: "Dharmapuri", fromSlug: "hosur", toSlug: "dharmapuri" },
{ from: "Dharmapuri", to: "Hosur", fromSlug: "dharmapuri", toSlug: "hosur" },
// Major Tamil Nadu Routes - Batch 8
{ from: "Kanchipuram", to: "Chennai", fromSlug: "kanchipuram", toSlug: "chennai" },
{ from: "Chennai", to: "Kanchipuram", fromSlug: "chennai", toSlug: "kanchipuram" },

{ from: "Kanchipuram", to: "Vellore", fromSlug: "kanchipuram", toSlug: "vellore" },
{ from: "Vellore", to: "Kanchipuram", fromSlug: "vellore", toSlug: "kanchipuram" },

{ from: "Chengalpattu", to: "Chennai", fromSlug: "chengalpattu", toSlug: "chennai" },
{ from: "Chennai", to: "Chengalpattu", fromSlug: "chennai", toSlug: "chengalpattu" },

{ from: "Chengalpattu", to: "Pondicherry", fromSlug: "chengalpattu", toSlug: "pondicherry" },
{ from: "Pondicherry", to: "Chengalpattu", fromSlug: "pondicherry", toSlug: "chengalpattu" },

{ from: "Cuddalore", to: "Pondicherry", fromSlug: "cuddalore", toSlug: "pondicherry" },
{ from: "Pondicherry", to: "Cuddalore", fromSlug: "pondicherry", toSlug: "cuddalore" },

{ from: "Cuddalore", to: "Thanjavur", fromSlug: "cuddalore", toSlug: "thanjavur" },
{ from: "Thanjavur", to: "Cuddalore", fromSlug: "thanjavur", toSlug: "cuddalore" },

{ from: "Thanjavur", to: "Kumbakonam", fromSlug: "thanjavur", toSlug: "kumbakonam" },
{ from: "Kumbakonam", to: "Thanjavur", fromSlug: "kumbakonam", toSlug: "thanjavur" },

{ from: "Thanjavur", to: "Nagapattinam", fromSlug: "thanjavur", toSlug: "nagapattinam" },
{ from: "Nagapattinam", to: "Thanjavur", fromSlug: "nagapattinam", toSlug: "thanjavur" },


// Major Tamil Nadu Routes - Batch 9
{ from: "Chennai", to: "Ariyalur", fromSlug: "chennai", toSlug: "ariyalur" },
{ from: "Ariyalur", to: "Chennai", fromSlug: "ariyalur", toSlug: "chennai" },

{ from: "Chennai", to: "Perambalur", fromSlug: "chennai", toSlug: "perambalur" },
{ from: "Perambalur", to: "Chennai", fromSlug: "perambalur", toSlug: "chennai" },

{ from: "Chennai", to: "Tenkasi", fromSlug: "chennai", toSlug: "tenkasi" },
{ from: "Tenkasi", to: "Chennai", fromSlug: "tenkasi", toSlug: "chennai" },

{ from: "Chennai", to: "Kallakurichi", fromSlug: "chennai", toSlug: "kallakurichi" },
{ from: "Kallakurichi", to: "Chennai", fromSlug: "kallakurichi", toSlug: "chennai" },

{ from: "Chennai", to: "Villupuram", fromSlug: "chennai", toSlug: "villupuram" },
{ from: "Villupuram", to: "Chennai", fromSlug: "villupuram", toSlug: "chennai" },

{ from: "Chennai", to: "Mayiladuthurai", fromSlug: "chennai", toSlug: "mayiladuthurai" },
{ from: "Mayiladuthurai", to: "Chennai", fromSlug: "mayiladuthurai", toSlug: "chennai" },

{ from: "Coimbatore", to: "Ooty", fromSlug: "coimbatore", toSlug: "ooty" },
{ from: "Ooty", to: "Coimbatore", fromSlug: "ooty", toSlug: "coimbatore" },

{ from: "Coimbatore", to: "Pollachi", fromSlug: "coimbatore", toSlug: "pollachi" },
{ from: "Pollachi", to: "Coimbatore", fromSlug: "pollachi", toSlug: "coimbatore" },

{ from: "Madurai", to: "Kanyakumari", fromSlug: "madurai", toSlug: "kanyakumari" },
{ from: "Kanyakumari", to: "Madurai", fromSlug: "kanyakumari", toSlug: "madurai" },

{ from: "Tirunelveli", to: "Tenkasi", fromSlug: "tirunelveli", toSlug: "tenkasi" },
{ from: "Tenkasi", to: "Tirunelveli", fromSlug: "tenkasi", toSlug: "tirunelveli" },
// Major Tamil Nadu Routes - Batch 9
{ from: "Tiruppur", to: "Erode", fromSlug: "tiruppur", toSlug: "erode" },
{ from: "Erode", to: "Tiruppur", fromSlug: "erode", toSlug: "tiruppur" },

{ from: "Tiruppur", to: "Karur", fromSlug: "tiruppur", toSlug: "karur" },
{ from: "Karur", to: "Tiruppur", fromSlug: "karur", toSlug: "tiruppur" },

{ from: "Tiruppur", to: "Namakkal", fromSlug: "tiruppur", toSlug: "namakkal" },
{ from: "Namakkal", to: "Tiruppur", fromSlug: "namakkal", toSlug: "tiruppur" },

{ from: "Erode", to: "Namakkal", fromSlug: "erode", toSlug: "namakkal" },
{ from: "Namakkal", to: "Erode", fromSlug: "namakkal", toSlug: "erode" },

{ from: "Erode", to: "Karur", fromSlug: "erode", toSlug: "karur" },
{ from: "Karur", to: "Erode", fromSlug: "karur", toSlug: "erode" },

{ from: "Erode", to: "Bhavani", fromSlug: "erode", toSlug: "bhavani" },
{ from: "Bhavani", to: "Erode", fromSlug: "bhavani", toSlug: "erode" },

{ from: "Salem", to: "Mettur", fromSlug: "salem", toSlug: "mettur" },
{ from: "Mettur", to: "Salem", fromSlug: "mettur", toSlug: "salem" },

{ from: "Coimbatore", to: "Mettupalayam", fromSlug: "coimbatore", toSlug: "mettupalayam" },
{ from: "Mettupalayam", to: "Coimbatore", fromSlug: "mettupalayam", toSlug: "coimbatore" },
// Major Tamil Nadu Routes - Batch 10
{ from: "Salem", to: "Erode", fromSlug: "salem", toSlug: "erode" },
{ from: "Erode", to: "Salem", fromSlug: "erode", toSlug: "salem" },

{ from: "Salem", to: "Namakkal", fromSlug: "salem", toSlug: "namakkal" },
{ from: "Namakkal", to: "Salem", fromSlug: "namakkal", toSlug: "salem" },

{ from: "Salem", to: "Dharmapuri", fromSlug: "salem", toSlug: "dharmapuri" },
{ from: "Dharmapuri", to: "Salem", fromSlug: "dharmapuri", toSlug: "salem" },

{ from: "Salem", to: "Krishnagiri", fromSlug: "salem", toSlug: "krishnagiri" },
{ from: "Krishnagiri", to: "Salem", fromSlug: "krishnagiri", toSlug: "salem" },

{ from: "Salem", to: "Coimbatore", fromSlug: "salem", toSlug: "coimbatore" },
{ from: "Coimbatore", to: "Salem", fromSlug: "coimbatore", toSlug: "salem" },

{ from: "Coimbatore", to: "Erode", fromSlug: "coimbatore", toSlug: "erode" },
{ from: "Erode", to: "Coimbatore", fromSlug: "erode", toSlug: "coimbatore" },

{ from: "Coimbatore", to: "Pollachi", fromSlug: "coimbatore", toSlug: "pollachi" },
{ from: "Pollachi", to: "Coimbatore", fromSlug: "pollachi", toSlug: "coimbatore" },

{ from: "Madurai", to: "Dindigul", fromSlug: "madurai", toSlug: "dindigul" },
{ from: "Dindigul", to: "Madurai", fromSlug: "dindigul", toSlug: "madurai" },
// Major Tamil Nadu Routes - Batch 11
{ from: "Madurai", to: "Dindigul", fromSlug: "madurai", toSlug: "dindigul" },
{ from: "Dindigul", to: "Madurai", fromSlug: "dindigul", toSlug: "madurai" },

{ from: "Madurai", to: "Tiruchirappalli", fromSlug: "madurai", toSlug: "tiruchirappalli" },
{ from: "Tiruchirappalli", to: "Madurai", fromSlug: "tiruchirappalli", toSlug: "madurai" },

{ from: "Madurai", to: "Virudhunagar", fromSlug: "madurai", toSlug: "virudhunagar" },
{ from: "Virudhunagar", to: "Madurai", fromSlug: "virudhunagar", toSlug: "madurai" },

{ from: "Madurai", to: "Sivakasi", fromSlug: "madurai", toSlug: "sivakasi" },
{ from: "Sivakasi", to: "Madurai", fromSlug: "sivakasi", toSlug: "madurai" },

{ from: "Madurai", to: "Ramanathapuram", fromSlug: "madurai", toSlug: "ramanathapuram" },
{ from: "Ramanathapuram", to: "Madurai", fromSlug: "ramanathapuram", toSlug: "madurai" },

{ from: "Madurai", to: "Sivaganga", fromSlug: "madurai", toSlug: "sivaganga" },
{ from: "Sivaganga", to: "Madurai", fromSlug: "sivaganga", toSlug: "madurai" },

{ from: "Dindigul", to: "Palani", fromSlug: "dindigul", toSlug: "palani" },
{ from: "Palani", to: "Dindigul", fromSlug: "palani", toSlug: "dindigul" },

{ from: "Dindigul", to: "Karur", fromSlug: "dindigul", toSlug: "karur" },
{ from: "Karur", to: "Dindigul", fromSlug: "karur", toSlug: "dindigul" },
// Major Tamil Nadu Routes - Batch 12
{ from: "Tiruchirappalli", to: "Thanjavur", fromSlug: "tiruchirappalli", toSlug: "thanjavur" },
{ from: "Thanjavur", to: "Tiruchirappalli", fromSlug: "thanjavur", toSlug: "tiruchirappalli" },

{ from: "Tiruchirappalli", to: "Karur", fromSlug: "tiruchirappalli", toSlug: "karur" },
{ from: "Karur", to: "Tiruchirappalli", fromSlug: "karur", toSlug: "tiruchirappalli" },

{ from: "Tiruchirappalli", to: "Namakkal", fromSlug: "tiruchirappalli", toSlug: "namakkal" },
{ from: "Namakkal", to: "Tiruchirappalli", fromSlug: "namakkal", toSlug: "tiruchirappalli" },

{ from: "Tiruchirappalli", to: "Perambalur", fromSlug: "tiruchirappalli", toSlug: "perambalur" },
{ from: "Perambalur", to: "Tiruchirappalli", fromSlug: "perambalur", toSlug: "tiruchirappalli" },

{ from: "Tiruchirappalli", to: "Ariyalur", fromSlug: "tiruchirappalli", toSlug: "ariyalur" },
{ from: "Ariyalur", to: "Tiruchirappalli", fromSlug: "ariyalur", toSlug: "tiruchirappalli" },

{ from: "Thanjavur", to: "Kumbakonam", fromSlug: "thanjavur", toSlug: "kumbakonam" },
{ from: "Kumbakonam", to: "Thanjavur", fromSlug: "kumbakonam", toSlug: "thanjavur" },

{ from: "Thanjavur", to: "Nagapattinam", fromSlug: "thanjavur", toSlug: "nagapattinam" },
{ from: "Nagapattinam", to: "Thanjavur", fromSlug: "nagapattinam", toSlug: "thanjavur" },

{ from: "Kumbakonam", to: "Mayiladuthurai", fromSlug: "kumbakonam", toSlug: "mayiladuthurai" },
{ from: "Mayiladuthurai", to: "Kumbakonam", fromSlug: "mayiladuthurai", toSlug: "kumbakonam" },
// Additional Tirupattur Routes

{ from: "Tirupattur", to: "Coimbatore", fromSlug: "tirupattur", toSlug: "coimbatore" },
{ from: "Coimbatore", to: "Tirupattur", fromSlug: "coimbatore", toSlug: "tirupattur" },

{ from: "Tirupattur", to: "Hyderabad", fromSlug: "tirupattur", toSlug: "hyderabad" },
{ from: "Hyderabad", to: "Tirupattur", fromSlug: "hyderabad", toSlug: "tirupattur" },

{ from: "Tirupattur", to: "Madurai", fromSlug: "tirupattur", toSlug: "madurai" },
{ from: "Madurai", to: "Tirupattur", fromSlug: "madurai", toSlug: "tirupattur" },

{ from: "Tirupattur", to: "Tiruchirappalli", fromSlug: "tirupattur", toSlug: "tiruchirappalli" },
{ from: "Tiruchirappalli", to: "Tirupattur", fromSlug: "tiruchirappalli", toSlug: "tirupattur" },

{ from: "Tirupattur", to: "Tirupati", fromSlug: "tirupattur", toSlug: "tirupati" },
{ from: "Tirupati", to: "Tirupattur", fromSlug: "tirupati", toSlug: "tirupattur" },

{ from: "Tirupattur", to: "Tiruvannamalai", fromSlug: "tirupattur", toSlug: "tiruvannamalai" },
{ from: "Tiruvannamalai", to: "Tirupattur", fromSlug: "tiruvannamalai", toSlug: "tirupattur" },

{ from: "Tirupattur", to: "Dharmapuri", fromSlug: "tirupattur", toSlug: "dharmapuri" },
{ from: "Dharmapuri", to: "Tirupattur", fromSlug: "dharmapuri", toSlug: "tirupattur" },

{ from: "Tirupattur", to: "Erode", fromSlug: "tirupattur", toSlug: "erode" },
{ from: "Erode", to: "Tirupattur", fromSlug: "erode", toSlug: "tirupattur" },

{ from: "Tirupattur", to: "Namakkal", fromSlug: "tirupattur", toSlug: "namakkal" },
{ from: "Namakkal", to: "Tirupattur", fromSlug: "namakkal", toSlug: "tirupattur" },

{ from: "Tirupattur", to: "Puducherry", fromSlug: "tirupattur", toSlug: "puducherry" },
{ from: "Puducherry", to: "Tirupattur", fromSlug: "puducherry", toSlug: "tirupattur" },

{ from: "Tirupattur", to: "Mysore", fromSlug: "tirupattur", toSlug: "mysore" },
{ from: "Mysore", to: "Tirupattur", fromSlug: "mysore", toSlug: "tirupattur" },

{ from: "Tirupattur", to: "Vijayawada", fromSlug: "tirupattur", toSlug: "vijayawada" },
{ from: "Vijayawada", to: "Tirupattur", fromSlug: "vijayawada", toSlug: "tirupattur" },

{ from: "Tirupattur", to: "Tirunelveli", fromSlug: "tirupattur", toSlug: "tirunelveli" },
{ from: "Tirunelveli", to: "Tirupattur", fromSlug: "tirunelveli", toSlug: "tirupattur" },

{ from: "Tirupattur", to: "Kanyakumari", fromSlug: "tirupattur", toSlug: "kanyakumari" },
{ from: "Kanyakumari", to: "Tirupattur", fromSlug: "kanyakumari", toSlug: "tirupattur" },
];
export const loadzyRoutes: LoadzyRoute[] = Array.from(
  new Map(
    rawLoadzyRoutes.map((route) => [
      `${route.fromSlug}-${route.toSlug}`,
      route,
    ])
  ).values()
);
