//süslü parantezli importlar named import, süslü parantezsiz import default import
//bir modülün default'unun istediğiniz adla import edebilirsiniz

import mySuperCarousel, {
  carousel,
  basicCarousel,
  compactCarousel,
  uberCarousel as testing,
} from "./carousel.js";

carousel();

basicCarousel();

mySuperCarousel();

compactCarousel();

testing();
