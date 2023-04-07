document.addEventListener("DOMContentLoaded", function() {
	// mendapatkan elemen form
	const form = document.querySelector("form");
	// menambahkan event listener ke tombol submit
	form.addEventListener("submit", function(event) {
		event.preventDefault();
		// mengambil data berat badan dan tinggi badan
		const berat_badan = parseFloat(document.querySelector("#berat_badan").value);
		const tinggi_badan = parseFloat(document.querySelector("#tinggi_badan").value);
		// melakukan perhitungan BMI
		const bmi = berat_badan / Math.pow(tinggi_badan / 100, 2);
		// menampilkan hasil BMI
		let hasil = "";
		if (bmi < 18.5) {
			hasil = "Underweight";
		} else if (bmi >= 18.5 && bmi <= 24.9) {
			hasil = "Normal weight";
		} else if (bmi >= 25 && bmi <= 29.9) {
			hasil = "Overweight";
		} else {
			hasil = "Obesity";
		}
		document.querySelector("#hasil").innerHTML = `BMI: ${bmi.toFixed(2)} (${hasil})`;
	});
});
