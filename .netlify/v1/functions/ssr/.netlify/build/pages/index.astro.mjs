import { c as createComponent, s as spreadAttributes, u as unescapeHTML, r as renderTemplate, m as maybeRenderHead, i as renderComponent, d as createAstro, f as addAttribute, j as renderHead, k as renderSlot } from '../chunks/astro/server_DbXODxXg.mjs';
import 'piccolore';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const Logo = createSvgComponent({"meta":{"src":"/_astro/logo.BPOCo40C.svg","width":32,"height":32,"format":"svg"},"attributes":{"width":"32","height":"32","viewBox":"0 0 32 32","fill":"none"},"children":"\n<g clip-path=\"url(#clip0_4_552)\">\n<path d=\"M14.7119 0.0558224C13.5985 0.153494 11.6548 0.602789 11.0395 0.905573C10.8343 1.01301 10.4827 1.15952 10.2678 1.22789C9.50599 1.47207 6.79069 2.97623 6.28279 3.4353C5.99954 3.68924 5.52095 4.07017 5.19863 4.27528C4.41725 4.81248 3.95818 5.29107 3.53819 6.01385C3.33308 6.35571 3.01076 6.82454 2.81541 7.06872C1.79962 8.28963 0.79359 10.2919 0.598245 11.4445C0.529874 11.884 0.393132 12.3821 0.305227 12.5482C0.0610454 13.017 -0.0366272 14.3356 0.0122091 16.3965C0.0610454 18.4183 0.285692 19.7076 0.832659 21.0847C0.988935 21.4754 1.23312 22.1689 1.36986 22.6377C1.54567 23.2042 1.74101 23.6242 1.96566 23.8879C2.15124 24.1126 2.44426 24.5521 2.6103 24.8744C3.07913 25.7535 4.87631 27.4921 6.01908 28.1953C6.31209 28.3711 6.73209 28.6544 6.94697 28.8302C7.45486 29.2306 9.31064 30.1292 10.6585 30.6371C13.1492 31.565 13.0613 31.5357 14.7412 31.5845C16.4017 31.6236 18.3063 31.4869 19.1853 31.2622C19.4881 31.1841 20.1425 31.0278 20.6211 30.9204C21.6369 30.686 23.6685 29.7288 24.9676 28.8888C25.4266 28.586 26.1299 28.0293 26.5303 27.6483C26.9308 27.2674 27.4485 26.8377 27.6633 26.6911C27.888 26.5349 28.2005 26.2516 28.3568 26.0563C29.0601 25.1675 29.9782 23.7414 30.1833 23.2335C30.3103 22.921 30.5447 22.4522 30.7107 22.1884C30.8865 21.915 31.0233 21.6122 31.0233 21.5047C31.0233 21.2508 31.3847 19.942 31.58 19.4927C31.8047 18.9652 32 17.2462 32 15.6639C32 14.5016 31.9609 14.0523 31.7656 13.2221C31.6386 12.6751 31.5019 12.0403 31.4726 11.8254C31.4335 11.6105 31.2284 11.0635 31.0233 10.6045C30.8084 10.1454 30.4665 9.31519 30.2517 8.74869C29.7145 7.35197 29.2456 6.58035 28.4349 5.7599C28.0638 5.37898 27.5461 4.80271 27.2922 4.48039C26.5206 3.48413 23.9518 1.87253 22.2816 1.32557C21.9104 1.20836 21.3341 0.993479 21.0118 0.856737C20.6895 0.719995 20.2695 0.583254 20.0839 0.544186C19.8984 0.495348 19.283 0.368374 18.7165 0.251167C17.5347 0.00698471 16.177 -0.0613861 14.7119 0.0558224ZM19.1267 1.9116C19.5858 2.00927 20.1914 2.20462 20.4746 2.35113C20.7481 2.48787 21.2755 2.69298 21.6272 2.81019C22.6918 3.13251 24.1862 3.90412 24.8992 4.49016C25.4755 4.96876 25.5536 5.08596 25.5536 5.36921C25.5536 5.672 25.4266 5.81851 24.2643 6.92221C23.5513 7.58638 22.7016 8.36776 22.3792 8.65101C21.8713 9.09054 18.6775 12.1184 17.4956 13.2807C16.7533 14.0035 16.558 14.1109 16.1184 14.0523C15.8938 14.023 15.5519 14.0523 15.3663 14.1109C15.0245 14.2281 14.9952 14.2184 14.0575 13.5737C12.8757 12.763 11.645 11.8937 9.92598 10.6631C8.89065 9.92076 8.5488 9.72541 8.32415 9.74495C8.16787 9.76448 7.99206 9.85239 7.93346 9.95006C7.75765 10.2333 8.03113 10.5752 9.19344 11.5128C9.78924 11.9817 10.8539 12.8705 11.5766 13.4663C12.2897 14.0718 13.1394 14.7556 13.452 14.9802C14.0282 15.41 14.0282 15.41 14.0282 15.9081C14.0282 16.6504 14.2626 17.0411 14.9073 17.3829C15.6008 17.7639 16.177 17.7736 16.7728 17.422C17.4761 17.002 17.691 16.6406 17.691 15.83C17.691 15.3514 17.7398 15.0681 17.8472 14.9021C17.9351 14.7653 18.8337 13.7984 19.8398 12.7533C20.8458 11.7082 22.3597 10.077 23.1997 9.13938C25.7685 6.25803 26.0615 5.97478 26.3643 6.05292C26.5108 6.08222 26.7843 6.25803 26.9796 6.42408C27.4875 6.86361 28.4154 8.32869 28.7377 9.16868C28.8842 9.5496 29.1577 10.2235 29.3433 10.6533C29.5289 11.0831 29.7828 11.6789 29.9098 11.9719C30.027 12.2649 30.1833 12.8802 30.2321 13.3393C30.3786 14.5211 30.3786 17.8615 30.2419 18.5159C30.1052 19.1313 29.0405 22.0908 28.7573 22.6475C28.2201 23.7024 26.2373 26.1735 25.4559 26.7498C24.6159 27.3651 23.1509 28.2539 22.7699 28.3711C22.5551 28.4395 22.0472 28.6641 21.6467 28.8692C21.2462 29.0744 20.7579 29.2697 20.5723 29.3088C20.3867 29.3381 19.8398 29.4748 19.3514 29.6018C17.6226 30.0511 16.5482 30.1683 15.1319 30.0609C14.1454 29.9827 13.6473 29.885 12.9831 29.6604C12.5143 29.4944 11.8794 29.3185 11.5864 29.2502C10.6488 29.0548 8.81251 28.2051 7.89439 27.5604C6.49767 26.5739 4.91538 25.314 4.52468 24.8647C3.93865 24.22 3.41122 23.3507 3.1768 22.6377C3.0596 22.2763 2.79588 21.6708 2.59077 21.2801C2.09264 20.3717 1.96566 19.9322 1.71171 18.2229C1.43823 16.3281 1.49683 14.5797 1.90706 12.5579C2.06333 11.7765 2.27821 10.917 2.37589 10.6533C2.59077 10.1063 3.25494 9.0417 4.01679 8.01614C4.30004 7.63522 4.7298 7.04918 4.95444 6.69756C5.53071 5.85758 7.60137 3.99203 8.50973 3.51343C10.2776 2.57578 10.8441 2.31206 11.225 2.25346C11.4497 2.22415 12.0748 2.10695 12.612 1.99951C14.624 1.59905 17.4761 1.56975 19.1267 1.9116ZM16.47 15.3904C16.6361 15.703 16.5775 16.0741 16.3235 16.3183C16.0305 16.6113 15.6984 16.6309 15.3566 16.3574C14.9171 16.0155 15.0831 15.156 15.6203 15.0779C15.9328 15.029 16.3626 15.1853 16.47 15.3904Z\" fill=\"#E17100\" />\n<path d=\"M14.5166 3.63063C13.9013 3.70877 13.0906 3.85528 12.7096 3.97248C12.3385 4.08969 11.6939 4.2655 11.2934 4.36317C10.4729 4.57805 9.44738 5.06642 8.82228 5.54501C7.04464 6.91243 6.15581 7.87939 4.8763 9.79377C3.86051 11.3272 3.47958 12.8998 3.47958 15.6151C3.47958 17.4806 3.67493 18.6918 4.16329 19.981C4.32934 20.3815 4.52468 20.9578 4.61259 21.2508C4.847 22.0322 5.09118 22.4717 5.81396 23.38C6.33162 24.0344 6.65394 24.3177 7.48416 24.8744C8.05066 25.2456 8.77344 25.7632 9.09576 26.0172C10.1604 26.8572 13.0808 27.9902 14.6631 28.1855C16.1087 28.3613 19.2928 27.9218 20.7481 27.3455C22.5648 26.6228 24.4401 25.4019 25.4755 24.2396C26.8136 22.7647 26.9699 22.501 27.5559 20.8601C28.1615 19.1703 28.4838 17.5783 28.4838 16.2695C28.4838 14.443 28.2396 12.8607 27.8001 11.8742C27.6047 11.4151 27.3605 10.7998 27.2629 10.5068C27.0578 9.86214 26.1103 8.21148 25.8955 8.13334C25.6708 8.03567 25.4559 8.16264 25.3973 8.41659C25.3485 8.5924 25.5731 9.14913 26.2178 10.5361C27.1457 12.4895 27.2043 12.6849 27.4582 14.4625C27.634 15.7127 27.6438 16.7774 27.4973 17.5978C27.3898 18.2327 26.7257 20.3327 26.4034 21.1043C25.5829 23.0186 23.8736 24.767 21.7639 25.8316C19.8104 26.8181 16.304 27.4921 14.5654 27.2283C13.6571 27.0818 11.6352 26.4177 10.7757 25.9781C9.35948 25.2554 6.60511 23.1847 6.11674 22.4717C5.9507 22.2275 5.66745 21.5829 5.49164 21.0261C5.30606 20.4694 5.09118 19.8736 5.00328 19.6978C4.73956 19.1899 4.48561 18.0569 4.35864 16.8067C4.15352 14.8337 4.46608 12.4895 5.07165 11.4835C6.9665 8.31892 8.51949 6.67801 10.5804 5.63292C11.4204 5.22269 13.2664 4.67573 14.3212 4.54875C16.558 4.2655 19.8495 4.88084 22.1839 6.02361C23.0923 6.46314 23.3267 6.46314 23.3853 6.03338C23.4243 5.78919 23.2485 5.67199 21.7444 4.90037C20.2988 4.15806 19.1365 3.81621 17.3198 3.57203C16.3724 3.45482 15.9426 3.45482 14.5166 3.63063Z\" fill=\"#E17100\" />\n<path d=\"M13.9599 7.07848C13.0222 7.32267 12.6706 7.47894 11.5766 8.12358C10.2678 8.90496 10.0139 9.13938 10.2288 9.39333C10.4241 9.63751 10.7562 9.53984 11.5376 9.03194C13.0808 8.00637 14.1943 7.66452 15.9231 7.66452C17.3296 7.65475 17.984 7.80126 19.8691 8.53381L20.7774 8.88543L20.9728 8.69008C21.0802 8.57288 21.1388 8.42637 21.1095 8.33846C21.0216 8.12358 19.9277 7.64499 18.5407 7.22499C17.564 6.92221 17.2221 6.86361 16.2259 6.8343C15.171 6.79523 14.9464 6.81477 13.9599 7.07848Z\" fill=\"#E17100\" />\n<path d=\"M23.2876 10.9073C23.0239 11.0538 23.0727 11.337 23.5025 12.0403C24.2057 13.2123 24.5378 14.736 24.4499 16.3867C24.3913 17.3048 24.3327 17.5783 23.942 18.6332C23.2583 20.4792 22.6625 21.2801 21.0509 22.4912C19.5956 23.5852 18.0524 24.1224 16.4212 24.1126C14.6924 24.1028 12.4948 23.4875 11.5083 22.7452C10.1995 21.7392 8.92973 20.4206 8.50973 19.6001C8.14834 18.8871 7.76742 17.4709 7.65998 16.3867C7.52324 15.0681 7.62091 14.4332 8.07997 13.4174C8.4316 12.6751 8.40229 12.4114 7.96277 12.4114C7.65998 12.4114 7.3865 12.8314 7.00557 13.8863C6.73209 14.6286 6.70279 14.8337 6.70279 15.8104C6.70279 16.5039 6.76139 17.129 6.85907 17.4904C6.9372 17.8127 7.09348 18.3987 7.20092 18.7992C7.64045 20.4889 8.61717 21.7685 10.4632 23.0773C11.606 23.888 12.5143 24.3665 13.5399 24.6889C14.204 24.894 14.4482 24.9135 16.0305 24.9037C17.3784 24.894 17.9449 24.8549 18.4723 24.7182C19.9081 24.3568 21.2169 23.634 22.6137 22.4229C23.9127 21.2996 24.9187 19.2973 25.368 16.9727C25.5145 16.1913 25.4266 14.8923 25.1629 13.8765C24.8308 12.597 23.8736 10.7901 23.5318 10.7998C23.4927 10.7998 23.3755 10.8487 23.2876 10.9073Z\" fill=\"#E17100\" />\n</g>\n<defs>\n<clipPath id=\"clip0_4_552\">\n<rect width=\"32\" height=\"32\" fill=\"white\" />\n</clipPath>\n</defs>\n"});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-[#0b0b0b] text-white sticky top-0 z-50" role="banner"> <div class="max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 py-3"> <a class="flex items-center gap-3 no-underline text-white" href="/" aria-label="WoodTime home"> <span class="w-9 h-9 inline-flex items-center justify-center"> ${renderComponent($$result, "Logo", Logo, {})} </span> <span class="font-semibold text-base hidden sm:inline">WoodTime</span> </a> <nav aria-label="Barre d'actions"> <a class="inline-block bg-[#ff7a0a] text-white px-4 py-2 rounded-full shadow-lg transform-gpu transition-transform hover:-translate-y-0.5" href="#">Promo Black Friday</a> </nav> </div> </header>`;
}, "C:/Users/ugoli/Documents/GitHub/woodtime/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/logo.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>WoodTime</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/ugoli/Documents/GitHub/woodtime/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const defaultEnd = new Date(Date.now() + 48 * 60 * 60 * 1e3).toISOString();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<section class="relative bg-cover bg-center bg-no-repeat min-h-screen" style="background-image: url('/image-1.webp');"> <div id="hero"`, ` class="min-h-screen flex items-center"> <div class="max-w-4xl mx-auto text-center py-28 px-6"> <h1 class="text-white text-3xl sm:text-4xl font-bold">L'\xE9l\xE9gance naturelle. L'offre exceptionnelle.</h1> <p class="text-gray-200 mt-4">Montres en bois \xE9co-con\xE7ues \u2014 jusqu'\xE0 -40 % pendant 48h seulement.</p> <div class="mt-8 inline-flex items-center gap-4 bg-white/5 rounded-full px-4 py-3"> <div class="text-center px-3"> <div id="cd-days" class="text-2xl font-semibold text-white">--</div> <div class="text-xs text-gray-300">Jours</div> </div> <div class="text-center px-3"> <div id="cd-hours" class="text-2xl font-semibold text-white">--</div> <div class="text-xs text-gray-300">Heures</div> </div> <div class="text-center px-3"> <div id="cd-mins" class="text-2xl font-semibold text-white">--</div> <div class="text-xs text-gray-300">Minutes</div> </div> <div class="text-center px-3"> <div id="cd-secs" class="text-2xl font-semibold text-white">--</div> <div class="text-xs text-gray-300">Secondes</div> </div> </div> <div class="mt-6"> <a id="cta-btn" href="#" class="inline-block bg-[#ff7a0a] text-white font-bold px-6 py-3 rounded-full">J'ach\xE8te maintenant</a> </div> <p class="sr-only" id="cd-live" aria-live="polite">D\xE9compte en cours</p> </div> </div> </section> <script type="module">
		// Read server-side date from hero data attribute and run countdown after DOM ready
		let endDate = null;
		function resolveEndDate(){
			const heroEl = document.getElementById('hero');
			if(heroEl && heroEl.dataset && heroEl.dataset.end){
				const d = new Date(heroEl.dataset.end);
				if(!isNaN(d)) return d;
			}
			// fallback: 48h from now
			return new Date(Date.now() + 48 * 60 * 60 * 1000);
		}

		function pad(n){ return String(n).padStart(2,'0'); }

		function initCountdown(){
			const $days = document.getElementById('cd-days');
			const $hours = document.getElementById('cd-hours');
			const $mins = document.getElementById('cd-mins');
			const $secs = document.getElementById('cd-secs');
			const $live = document.getElementById('cd-live');
			const $cta = document.getElementById('cta-btn');

			if(!$days || ! $hours || ! $mins || ! $secs) return;

			let timer = null;
			endDate = resolveEndDate();

			function update(){
				const now = new Date();
				let diff = Math.max(0, endDate - now);

				const days = Math.floor(diff / (24*60*60*1000));
				diff -= days * 24*60*60*1000;
				const hours = Math.floor(diff / (60*60*1000));
				diff -= hours * 60*60*1000;
				const mins = Math.floor(diff / (60*1000));
				diff -= mins * 60*1000;
				const secs = Math.floor(diff / 1000);

				$days.textContent = days;
				$hours.textContent = pad(hours);
				$mins.textContent = pad(mins);
				$secs.textContent = pad(secs);
				if($live) $live.textContent = \`Temps restant : \${days} jours \${pad(hours)} heures \${pad(mins)} minutes \${pad(secs)} secondes\`;

				if(days===0 && hours===0 && mins===0 && secs===0){
					clearInterval(timer);
					if($live) $live.textContent = 'Offre termin\xE9e';
					if($cta) { $cta.classList.add('opacity-50','pointer-events-none'); $cta.textContent = 'Offre termin\xE9e'; }
				}
			}

			update();
			timer = setInterval(update, 1000);
		}

		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', initCountdown);
		} else {
			initCountdown();
		}
	<\/script> `], [" ", `<section class="relative bg-cover bg-center bg-no-repeat min-h-screen" style="background-image: url('/image-1.webp');"> <div id="hero"`, ` class="min-h-screen flex items-center"> <div class="max-w-4xl mx-auto text-center py-28 px-6"> <h1 class="text-white text-3xl sm:text-4xl font-bold">L'\xE9l\xE9gance naturelle. L'offre exceptionnelle.</h1> <p class="text-gray-200 mt-4">Montres en bois \xE9co-con\xE7ues \u2014 jusqu'\xE0 -40 % pendant 48h seulement.</p> <div class="mt-8 inline-flex items-center gap-4 bg-white/5 rounded-full px-4 py-3"> <div class="text-center px-3"> <div id="cd-days" class="text-2xl font-semibold text-white">--</div> <div class="text-xs text-gray-300">Jours</div> </div> <div class="text-center px-3"> <div id="cd-hours" class="text-2xl font-semibold text-white">--</div> <div class="text-xs text-gray-300">Heures</div> </div> <div class="text-center px-3"> <div id="cd-mins" class="text-2xl font-semibold text-white">--</div> <div class="text-xs text-gray-300">Minutes</div> </div> <div class="text-center px-3"> <div id="cd-secs" class="text-2xl font-semibold text-white">--</div> <div class="text-xs text-gray-300">Secondes</div> </div> </div> <div class="mt-6"> <a id="cta-btn" href="#" class="inline-block bg-[#ff7a0a] text-white font-bold px-6 py-3 rounded-full">J'ach\xE8te maintenant</a> </div> <p class="sr-only" id="cd-live" aria-live="polite">D\xE9compte en cours</p> </div> </div> </section> <script type="module">
		// Read server-side date from hero data attribute and run countdown after DOM ready
		let endDate = null;
		function resolveEndDate(){
			const heroEl = document.getElementById('hero');
			if(heroEl && heroEl.dataset && heroEl.dataset.end){
				const d = new Date(heroEl.dataset.end);
				if(!isNaN(d)) return d;
			}
			// fallback: 48h from now
			return new Date(Date.now() + 48 * 60 * 60 * 1000);
		}

		function pad(n){ return String(n).padStart(2,'0'); }

		function initCountdown(){
			const $days = document.getElementById('cd-days');
			const $hours = document.getElementById('cd-hours');
			const $mins = document.getElementById('cd-mins');
			const $secs = document.getElementById('cd-secs');
			const $live = document.getElementById('cd-live');
			const $cta = document.getElementById('cta-btn');

			if(!$days || ! $hours || ! $mins || ! $secs) return;

			let timer = null;
			endDate = resolveEndDate();

			function update(){
				const now = new Date();
				let diff = Math.max(0, endDate - now);

				const days = Math.floor(diff / (24*60*60*1000));
				diff -= days * 24*60*60*1000;
				const hours = Math.floor(diff / (60*60*1000));
				diff -= hours * 60*60*1000;
				const mins = Math.floor(diff / (60*1000));
				diff -= mins * 60*1000;
				const secs = Math.floor(diff / 1000);

				$days.textContent = days;
				$hours.textContent = pad(hours);
				$mins.textContent = pad(mins);
				$secs.textContent = pad(secs);
				if($live) $live.textContent = \\\`Temps restant : \\\${days} jours \\\${pad(hours)} heures \\\${pad(mins)} minutes \\\${pad(secs)} secondes\\\`;

				if(days===0 && hours===0 && mins===0 && secs===0){
					clearInterval(timer);
					if($live) $live.textContent = 'Offre termin\xE9e';
					if($cta) { $cta.classList.add('opacity-50','pointer-events-none'); $cta.textContent = 'Offre termin\xE9e'; }
				}
			}

			update();
			timer = setInterval(update, 1000);
		}

		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', initCountdown);
		} else {
			initCountdown();
		}
	<\/script> `])), maybeRenderHead(), addAttribute(defaultEnd, "data-end")) })}`;
}, "C:/Users/ugoli/Documents/GitHub/woodtime/src/pages/index.astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/woodtime/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
