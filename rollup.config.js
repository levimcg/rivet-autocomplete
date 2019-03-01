import svelte from 'rollup-plugin-svelte';

export default {
  input: 'src/RivetAutocomplete.html',
  output: [
    {
      file: './dist/rivet-autocomplete.js',
      format: 'umd',
      name: 'RivetAutocomplete' 
    }
  ],
  plugins: [
    svelte()
  ]
};
