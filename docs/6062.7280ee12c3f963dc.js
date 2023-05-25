"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[6062],{29864:(Te,ie,v)=>{v.d(ie,{D:()=>me,b:()=>Ce});var R=v(53661),S=v(23160),U=v(74891),H=v(88026),z=v(26573),I=v(56877),L=v(2847),M=v(66948),D=v(62666),W=v(13321),re=v(3943),se=v(49549),Y=v(83817),ae=v(16568),he=v(27256),ne=v(87443),K=v(21187),ee=v(986),J=v(69156),de=v(98805),xe=v(57895),ve=v(5395),Ae=v(83114),Pe=v(85950),Oe=v(50283),Je=v(77679),qe=v(56681),be=v(63855),ge=v(28958),ye=v(64040),Ve=v(89877),at=v(26615),Ye=v(4058),Me=v(43282),Re=v(99106),Ee=v(63924),Ie=v(7427),Ge=v(94391),et=v(63984),ce=v(51663);function Ce(oe){const pe=new Ie.kG,{vertex:Xe,fragment:G,varyings:Z}=pe;return(0,Ve.Sv)(Xe,oe),pe.include(W.f),Z.add("vpos","vec3"),pe.include(qe.k,oe),pe.include(M.f,oe),pe.include(he.L,oe),oe.hasColorTextureTransform&&pe.include(Je.av),oe.output!==z.H.Color&&oe.output!==z.H.Alpha||(oe.hasNormalTextureTransform&&pe.include(Je.NI),oe.hasEmissionTextureTransform&&pe.include(Je.R5),oe.hasOcclusionTextureTransform&&pe.include(Je.jF),oe.hasMetallicRoughnessTextureTransform&&pe.include(Je.DT),(0,Ve.hY)(Xe,oe),pe.include(D.O,oe),pe.include(L.w,oe),oe.normalType===D.h.Attribute&&oe.offsetBackfaces&&pe.include(H.w),pe.include(K.Q,oe),pe.include(ae.Bb,oe),oe.instancedColor&&pe.attributes.add(ce.T.INSTANCECOLOR,"vec4"),Z.add("localvpos","vec3"),pe.include(se.D,oe),pe.include(U.qj,oe),pe.include(re.R,oe),pe.include(Y.c,oe),Xe.uniforms.add(new Ye.N("externalColor",q=>q.externalColor)),Z.add("vcolorExt","vec4"),oe.hasMultipassTerrain&&Z.add("depth","float"),oe.hasModelTransformation&&Xe.uniforms.add(new Ee.g("model",q=>(0,R.pC)(q.modelTransformation)?q.modelTransformation:S.I)),Xe.code.add(Re.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${oe.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${Re.H.float(be.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${oe.normalType===D.h.Attribute?Re.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${oe.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${oe.hasModelTransformation?"model,":""} vpos);
          ${oe.normalType===D.h.Attribute&&oe.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${oe.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${oe.hasColorTextureTransform?Re.H`forwardColorUV();`:""}
        ${oe.hasNormalTextureTransform?Re.H`forwardNormalUV();`:""}
        ${oe.hasEmissionTextureTransform?Re.H`forwardEmissiveUV();`:""}
        ${oe.hasOcclusionTextureTransform?Re.H`forwardOcclusionUV();`:""}
        ${oe.hasMetallicRoughnessTextureTransform?Re.H`forwardMetallicRoughnessUV();`:""}
      }
    `)),oe.output===z.H.Alpha&&(pe.include(I.f5,oe),pe.include(ge.z,oe),pe.include(xe.l,oe),G.uniforms.add([new Me.p("opacity",q=>q.opacity),new Me.p("layerOpacity",q=>q.layerOpacity)]),oe.hasColorTexture&&G.uniforms.add(new Ge.A("tex",q=>q.texture)),G.include(ye.y),G.code.add(Re.H`
      void main() {
        discardBySlice(vpos);
        ${oe.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${oe.hasColorTexture?Re.H`
                vec4 texColor = texture2D(tex, ${oe.hasColorTextureTransform?Re.H`colorUV`:Re.H`vuv0`});
                ${oe.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Re.H`vec4 texColor = vec4(1.0);`}
        ${oe.hasVertexColors?Re.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Re.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),oe.output===z.H.Color&&(pe.include(I.f5,oe),pe.include(J.XP,oe),pe.include(ee.K,oe),pe.include(ge.z,oe),pe.include(oe.instancedDoublePrecision?Oe.hb:Oe.XE,oe),pe.include(xe.l,oe),(0,Ve.hY)(G,oe),G.uniforms.add([Xe.uniforms.get("localOrigin"),new at.J("ambient",q=>q.ambient),new at.J("diffuse",q=>q.diffuse),new Me.p("opacity",q=>q.opacity),new Me.p("layerOpacity",q=>q.layerOpacity)]),oe.hasColorTexture&&G.uniforms.add(new Ge.A("tex",q=>q.texture)),pe.include(Pe.jV,oe),pe.include(Ae.T,oe),G.include(ye.y),pe.include(ve.k,oe),(0,J.PN)(G),(0,J.sC)(G),(0,de.F1)(G),G.code.add(Re.H`
      void main() {
        discardBySlice(vpos);
        ${oe.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${oe.hasColorTexture?Re.H`
                vec4 texColor = texture2D(tex, ${oe.hasColorTextureTransform?Re.H`colorUV`:Re.H`vuv0`});
                ${oe.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Re.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${oe.normalType===D.h.ScreenDerivative?Re.H`
                vec3 normal = screenDerivativeNormal(localvpos);`:Re.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${oe.pbrMode===Pe.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${oe.receiveShadows?"readShadowMap(vpos, linearDepth)":oe.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${oe.hasVertexColors?Re.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Re.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${oe.hasNormalTexture?Re.H`
                mat3 tangentSpace = ${oe.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:Re.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${oe.spherical?Re.H`normalize(posWorld);`:Re.H`vec3(0.0, 0.0, 1.0);`}

        ${oe.snowCover?Re.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${oe.pbrMode===Pe.f7.Normal||oe.pbrMode===Pe.f7.Schematic?Re.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${oe.snowCover?Re.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:Re.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${oe.transparencyPassType===et.A.Color?Re.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),pe.include(ne.s,oe),pe}const me=Object.freeze(Object.defineProperty({__proto__:null,build:Ce},Symbol.toStringTag,{value:"Module"}))},48647:(Te,ie,v)=>{v.d(ie,{R:()=>Re,b:()=>Me});var R=v(74891),S=v(88026),U=v(26573),H=v(56877),z=v(2847),I=v(66948),L=v(62666),M=v(13321),D=v(3943),W=v(49549),re=v(83817),se=v(27256),Y=v(87443),ae=v(986),he=v(69156),ne=v(98805),K=v(57895),ee=v(83114),J=v(85950),de=v(50283),xe=v(56681),ve=v(63855),Ae=v(28958),Pe=v(64040),Oe=v(89877),Je=v(26615),qe=v(4058),be=v(43282),ge=v(99106),ye=v(7427),Ve=v(94391),at=v(63984),Ye=v(51663);function Me(Ee){const Ie=new ye.kG,{vertex:Ge,fragment:et,varyings:ce}=Ie;return(0,Oe.Sv)(Ge,Ee),Ie.include(M.f),ce.add("vpos","vec3"),Ie.include(xe.k,Ee),Ie.include(I.f,Ee),Ie.include(se.L,Ee),Ee.output!==U.H.Color&&Ee.output!==U.H.Alpha||((0,Oe.hY)(Ie.vertex,Ee),Ie.include(L.O,Ee),Ie.include(z.w,Ee),Ee.offsetBackfaces&&Ie.include(S.w),Ee.instancedColor&&Ie.attributes.add(Ye.T.INSTANCECOLOR,"vec4"),ce.add("vNormalWorld","vec3"),ce.add("localvpos","vec3"),Ee.hasMultipassTerrain&&ce.add("depth","float"),Ie.include(W.D,Ee),Ie.include(R.qj,Ee),Ie.include(D.R,Ee),Ie.include(re.c,Ee),Ge.uniforms.add(new qe.N("externalColor",Ce=>Ce.externalColor)),ce.add("vcolorExt","vec4"),Ge.code.add(ge.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${Ee.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${ge.H.float(ve.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${Ee.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${Ee.hasMultipassTerrain?ge.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),Ee.output===U.H.Alpha&&(Ie.include(H.f5,Ee),Ie.include(Ae.z,Ee),Ie.include(K.l,Ee),et.uniforms.add([new be.p("opacity",Ce=>Ce.opacity),new be.p("layerOpacity",Ce=>Ce.layerOpacity)]),Ee.hasColorTexture&&et.uniforms.add(new Ve.A("tex",Ce=>Ce.texture)),et.include(Pe.y),et.code.add(ge.H`
      void main() {
        discardBySlice(vpos);
        ${Ee.hasMultipassTerrain?ge.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${Ee.hasColorTexture?ge.H`
                vec4 texColor = texture2D(tex, ${Ee.hasColorTextureTransform?ge.H`colorUV`:ge.H`vuv0`});
                ${Ee.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:ge.H`vec4 texColor = vec4(1.0);`}
        ${Ee.hasVertexColors?ge.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:ge.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),Ee.output===U.H.Color&&(Ie.include(H.f5,Ee),Ie.include(he.XP,Ee),Ie.include(ae.K,Ee),Ie.include(Ae.z,Ee),Ie.include(Ee.instancedDoublePrecision?de.hb:de.XE,Ee),Ie.include(K.l,Ee),(0,Oe.hY)(Ie.fragment,Ee),(0,ne.Pe)(et),(0,he.PN)(et),(0,he.sC)(et),et.uniforms.add([Ge.uniforms.get("localOrigin"),Ge.uniforms.get("view"),new Je.J("ambient",Ce=>Ce.ambient),new Je.J("diffuse",Ce=>Ce.diffuse),new be.p("opacity",Ce=>Ce.opacity),new be.p("layerOpacity",Ce=>Ce.layerOpacity)]),Ee.hasColorTexture&&et.uniforms.add(new Ve.A("tex",Ce=>Ce.texture)),Ie.include(J.jV,Ee),Ie.include(ee.T,Ee),et.include(Pe.y),Ie.extensions.add("GL_OES_standard_derivatives"),(0,ne.F1)(et),et.code.add(ge.H`
      void main() {
        discardBySlice(vpos);
        ${Ee.hasMultipassTerrain?ge.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${Ee.hasColorTexture?ge.H`
                vec4 texColor = texture2D(tex, ${Ee.hasColorTextureTransform?ge.H`colorUV`:ge.H`vuv0`});
                ${Ee.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:ge.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${Ee.pbrMode===J.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${Ee.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":Ee.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${Ee.hasVertexColors?ge.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:ge.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${Ee.snowCover?ge.H`albedo = mix(albedo, vec3(1), 0.9);`:ge.H``}
        ${ge.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${Ee.pbrMode===J.f7.Normal||Ee.pbrMode===J.f7.Schematic?Ee.spherical?ge.H`vec3 normalGround = normalize(vpos + localOrigin);`:ge.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:ge.H``}
        ${Ee.pbrMode===J.f7.Normal||Ee.pbrMode===J.f7.Schematic?ge.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${Ee.snowCover?ge.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:ge.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${Ee.transparencyPassType===at.A.Color?ge.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:ge.H``}
      }
    `)),Ie.include(Y.s,Ee),Ie}const Re=Object.freeze(Object.defineProperty({__proto__:null,build:Me},Symbol.toStringTag,{value:"Module"}))},30265:(Te,ie,v)=>{v.d(ie,{S:()=>ne,b:()=>Y,g:()=>ae});var R=v(53661),S=v(80775),U=v(83457),H=v(93249),z=v(46018),I=v(14302),L=v(71882),M=v(43282),D=v(99106),W=v(7427),re=v(94391);const se=16;function Y(){const K=new W.kG,ee=K.fragment;return K.include(H.k),ee.include(z.S),K.include(I.G),ee.uniforms.add(new M.p("radius",(J,de)=>ae(de.camera))),ee.code.add(D.H`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),ee.code.add(D.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),ee.uniforms.add([new L.A("nearFar",(J,de)=>de.camera.nearFar),new re.A("normalMap",J=>J.normalTexture),new re.A("depthMap",J=>J.depthTexture),new L.A("zScale",(J,de)=>(0,I.R)(de)),new M.p("projScale",J=>J.projScale),new re.A("rnm",J=>J.noiseTexture),new L.A("rnmScale",(J,de)=>(0,S.s)(he,de.camera.fullWidth/(0,R.Wg)(J.noiseTexture).descriptor.width,de.camera.fullHeight/(0,R.Wg)(J.noiseTexture).descriptor.height)),new M.p("intensity",J=>J.intensity),new L.A("screenSize",(J,de)=>(0,S.s)(he,de.camera.fullWidth,de.camera.fullHeight))]),ee.code.add(D.H`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${D.H.int(se)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${D.H.int(se)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),K}function ae(K){return Math.max(10,20*K.computeRenderPixelSizeAtDist(Math.abs(4*K.relativeElevation)))}const he=(0,U.a)(),ne=Object.freeze(Object.defineProperty({__proto__:null,build:Y,getRadius:ae},Symbol.toStringTag,{value:"Module"}))},38694:(Te,ie,v)=>{v.d(ie,{S:()=>Y,b:()=>se});var R=v(92950),S=v(93249),U=v(46018),H=v(85634),z=v(71882),I=v(43282),L=v(99106),M=v(7427),D=v(89548),W=v(94391);const re=4;function se(){const ae=new M.kG,he=ae.fragment;ae.include(S.k);const ne=(re+1)/2,K=1/(2*ne*ne);return he.include(U.S),he.uniforms.add([new W.A("depthMap",ee=>ee.depthTexture),new D.R("tex",ee=>ee.colorTexture),new H.q("blurSize",ee=>ee.blurSize),new I.p("projScale",(ee,J)=>{const de=(0,R.i)(J.camera.eye,J.camera.center);return de>5e4?Math.max(0,ee.projScale-(de-5e4)):ee.projScale}),new z.A("nearFar",(ee,J)=>J.camera.nearFar)]),he.code.add(L.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${L.H.float(K)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),he.code.add(L.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${L.H.int(re)}; r <= ${L.H.int(re)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),ae}const Y=Object.freeze(Object.defineProperty({__proto__:null,build:se},Symbol.toStringTag,{value:"Module"}))},53251:(Te,ie,v)=>{function R(){return[1,0,0,0,1,0,0,0,1]}function U(I,L,M,D,W,re,se,Y,ae){return[I,L,M,D,W,re,se,Y,ae]}function H(I,L){return new Float64Array(I,L,9)}v.d(ie,{a:()=>H,c:()=>R,f:()=>U}),Object.freeze(Object.defineProperty({__proto__:null,clone:function S(I){return[I[0],I[1],I[2],I[3],I[4],I[5],I[6],I[7],I[8]]},create:R,createView:H,fromValues:U},Symbol.toStringTag,{value:"Module"}))},23160:(Te,ie,v)=>{function R(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function S(L){return[L[0],L[1],L[2],L[3],L[4],L[5],L[6],L[7],L[8],L[9],L[10],L[11],L[12],L[13],L[14],L[15]]}function H(L,M){return new Float64Array(L,M,16)}v.d(ie,{I:()=>z,a:()=>H,b:()=>S,c:()=>R});const z=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:z,clone:S,create:R,createView:H,fromValues:function U(L,M,D,W,re,se,Y,ae,he,ne,K,ee,J,de,xe,ve){return[L,M,D,W,re,se,Y,ae,he,ne,K,ee,J,de,xe,ve]}},Symbol.toStringTag,{value:"Module"}))},50894:(Te,ie,v)=>{v.d(ie,{c:()=>ee,g:()=>D,j:()=>Me,k:()=>de,m:()=>W,s:()=>M});var R=v(53251),S=v(29042),U=v(77765),H=v(33980),z=v(92950),I=v(71943);function M(G,Z,q){q*=.5;const X=Math.sin(q);return G[0]=X*Z[0],G[1]=X*Z[1],G[2]=X*Z[2],G[3]=Math.cos(q),G}function D(G,Z){const q=2*Math.acos(Z[3]),X=Math.sin(q/2);return X>(0,H.g)()?(G[0]=Z[0]/X,G[1]=Z[1]/X,G[2]=Z[2]/X):(G[0]=1,G[1]=0,G[2]=0),q}function W(G,Z,q){const X=Z[0],te=Z[1],fe=Z[2],ue=Z[3],le=q[0],Se=q[1],Ue=q[2],We=q[3];return G[0]=X*We+ue*le+te*Ue-fe*Se,G[1]=te*We+ue*Se+fe*le-X*Ue,G[2]=fe*We+ue*Ue+X*Se-te*le,G[3]=ue*We-X*le-te*Se-fe*Ue,G}function he(G,Z,q,X){const te=Z[0],fe=Z[1],ue=Z[2],le=Z[3];let Se,Ue,We,dt,mt,Et=q[0],Tt=q[1],xt=q[2],nt=q[3];return Ue=te*Et+fe*Tt+ue*xt+le*nt,Ue<0&&(Ue=-Ue,Et=-Et,Tt=-Tt,xt=-xt,nt=-nt),1-Ue>(0,H.g)()?(Se=Math.acos(Ue),We=Math.sin(Se),dt=Math.sin((1-X)*Se)/We,mt=Math.sin(X*Se)/We):(dt=1-X,mt=X),G[0]=dt*te+mt*Et,G[1]=dt*fe+mt*Tt,G[2]=dt*ue+mt*xt,G[3]=dt*le+mt*nt,G}function ee(G,Z){return G[0]=-Z[0],G[1]=-Z[1],G[2]=-Z[2],G[3]=Z[3],G}function J(G,Z){const q=Z[0]+Z[4]+Z[8];let X;if(q>0)X=Math.sqrt(q+1),G[3]=.5*X,X=.5/X,G[0]=(Z[5]-Z[7])*X,G[1]=(Z[6]-Z[2])*X,G[2]=(Z[1]-Z[3])*X;else{let te=0;Z[4]>Z[0]&&(te=1),Z[8]>Z[3*te+te]&&(te=2);const fe=(te+1)%3,ue=(te+2)%3;X=Math.sqrt(Z[3*te+te]-Z[3*fe+fe]-Z[3*ue+ue]+1),G[te]=.5*X,X=.5/X,G[3]=(Z[3*fe+ue]-Z[3*ue+fe])*X,G[fe]=(Z[3*fe+te]+Z[3*te+fe])*X,G[ue]=(Z[3*ue+te]+Z[3*te+ue])*X}return G}function de(G,Z,q,X){const te=.5*Math.PI/180;Z*=te,q*=te,X*=te;const fe=Math.sin(Z),ue=Math.cos(Z),le=Math.sin(q),Se=Math.cos(q),Ue=Math.sin(X),We=Math.cos(X);return G[0]=fe*Se*We-ue*le*Ue,G[1]=ue*le*We+fe*Se*Ue,G[2]=ue*Se*Ue-fe*le*We,G[3]=ue*Se*We+fe*le*Ue,G}const ve=I.c,Ae=I.s,Pe=I.a,Oe=W,Je=I.b,qe=I.d,be=I.l,ge=I.e,ye=ge,Ve=I.f,at=Ve,Ye=I.n,Me=I.g,Re=I.h,Ie=(0,U.c)(),Ge=(0,U.f)(1,0,0),et=(0,U.f)(0,1,0),Ce=(0,S.a)(),me=(0,S.a)(),pe=(0,R.c)();Object.freeze(Object.defineProperty({__proto__:null,add:Pe,calculateW:function ae(G,Z){const q=Z[0],X=Z[1],te=Z[2];return G[0]=q,G[1]=X,G[2]=te,G[3]=Math.sqrt(Math.abs(1-q*q-X*X-te*te)),G},conjugate:ee,copy:ve,dot:qe,equals:Re,exactEquals:Me,fromEuler:de,fromMat3:J,getAxisAngle:D,identity:function L(G){return G[0]=0,G[1]=0,G[2]=0,G[3]=1,G},invert:function K(G,Z){const q=Z[0],X=Z[1],te=Z[2],fe=Z[3],ue=q*q+X*X+te*te+fe*fe,le=ue?1/ue:0;return G[0]=-q*le,G[1]=-X*le,G[2]=-te*le,G[3]=fe*le,G},len:ye,length:ge,lerp:be,mul:Oe,multiply:W,normalize:Ye,random:function ne(G){const Z=H.R,q=Z(),X=Z(),te=Z(),fe=Math.sqrt(1-q),ue=Math.sqrt(q);return G[0]=fe*Math.sin(2*Math.PI*X),G[1]=fe*Math.cos(2*Math.PI*X),G[2]=ue*Math.sin(2*Math.PI*te),G[3]=ue*Math.cos(2*Math.PI*te),G},rotateX:function re(G,Z,q){q*=.5;const X=Z[0],te=Z[1],fe=Z[2],ue=Z[3],le=Math.sin(q),Se=Math.cos(q);return G[0]=X*Se+ue*le,G[1]=te*Se+fe*le,G[2]=fe*Se-te*le,G[3]=ue*Se-X*le,G},rotateY:function se(G,Z,q){q*=.5;const X=Z[0],te=Z[1],fe=Z[2],ue=Z[3],le=Math.sin(q),Se=Math.cos(q);return G[0]=X*Se-fe*le,G[1]=te*Se+ue*le,G[2]=fe*Se+X*le,G[3]=ue*Se-te*le,G},rotateZ:function Y(G,Z,q){q*=.5;const X=Z[0],te=Z[1],fe=Z[2],ue=Z[3],le=Math.sin(q),Se=Math.cos(q);return G[0]=X*Se+te*le,G[1]=te*Se-X*le,G[2]=fe*Se+ue*le,G[3]=ue*Se-fe*le,G},rotationTo:function Ee(G,Z,q){const X=(0,z.e)(Z,q);return X<-.999999?((0,z.f)(Ie,Ge,Z),(0,z.u)(Ie)<1e-6&&(0,z.f)(Ie,et,Z),(0,z.n)(Ie,Ie),M(G,Ie,Math.PI),G):X>.999999?(G[0]=0,G[1]=0,G[2]=0,G[3]=1,G):((0,z.f)(Ie,Z,q),G[0]=Ie[0],G[1]=Ie[1],G[2]=Ie[2],G[3]=1+X,Ye(G,G))},scale:Je,set:Ae,setAxes:function oe(G,Z,q,X){const te=pe;return te[0]=q[0],te[3]=q[1],te[6]=q[2],te[1]=X[0],te[4]=X[1],te[7]=X[2],te[2]=-Z[0],te[5]=-Z[1],te[8]=-Z[2],Ye(G,J(G,te))},setAxisAngle:M,slerp:he,sqlerp:function ce(G,Z,q,X,te,fe){return he(Ce,Z,te,fe),he(me,q,X,fe),he(G,Ce,me,2*fe*(1-fe)),G},sqrLen:at,squaredLength:Ve,str:function xe(G){return"quat("+G[0]+", "+G[1]+", "+G[2]+", "+G[3]+")"}},Symbol.toStringTag,{value:"Module"}))},29042:(Te,ie,v)=>{function R(){return[0,0,0,1]}function S(L){return[L[0],L[1],L[2],L[3]]}function H(L,M){return new Float64Array(L,M,4)}v.d(ie,{I:()=>z,a:()=>R,b:()=>S,c:()=>H});const z=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:z,clone:S,create:R,createView:H,fromValues:function U(L,M,D,W){return[L,M,D,W]}},Symbol.toStringTag,{value:"Module"}))},33659:(Te,ie,v)=>{v.d(ie,{a:()=>de,c:()=>ae,g:()=>xe,h:()=>he,j:()=>qe,m:()=>Ge}),v(67087);var W,me,S=v(28191),U=v(93142),H=v(53661),z=v(64544),I=v(92950),L=v(77765),M=v(71943),D=v(91746);(me=W||(W={}))[me.X=0]="X",me[me.Y=1]="Y",me[me.Z=2]="Z";var re=v(32684),se=v(84877),Y=v(82309);function ae(){return(0,D.c)()}function he(me,oe=ae()){return(0,M.c)(oe,me)}function de(me){return me[3]}function xe(me){return me}function Oe(me,oe,pe){if((0,H.Wi)(oe))return!1;const{origin:Xe,direction:G}=oe,Z=Je;Z[0]=Xe[0]-me[0],Z[1]=Xe[1]-me[1],Z[2]=Xe[2]-me[2];const q=G[0]*G[0]+G[1]*G[1]+G[2]*G[2];if(0===q)return!1;const X=2*(G[0]*Z[0]+G[1]*Z[1]+G[2]*Z[2]),te=X*X-4*q*(Z[0]*Z[0]+Z[1]*Z[1]+Z[2]*Z[2]-me[3]*me[3]);if(te<0)return!1;const fe=Math.sqrt(te);let ue=(-X-fe)/(2*q);const le=(-X+fe)/(2*q);return(ue<0||le<ue&&le>0)&&(ue=le),!(ue<0||(pe&&(pe[0]=Xe[0]+G[0]*ue,pe[1]=Xe[1]+G[1]*ue,pe[2]=Xe[2]+G[2]*ue),0))}const Je=(0,L.c)();function qe(me,oe){return Oe(me,oe,null)}function ge(me,oe,pe){const Xe=Y.WM.get(),G=Y.MP.get();(0,I.f)(Xe,oe.origin,oe.direction);const Z=de(me);(0,I.f)(pe,Xe,oe.origin),(0,I.g)(pe,pe,1/(0,I.l)(pe)*Z);const q=Ye(me,oe.origin),X=(0,se.EU)(oe.origin,pe);return(0,z.d)(G,X+q,Xe),(0,I.m)(pe,pe,G),pe}function Ve(me,oe,pe){const Xe=(0,I.b)(Y.WM.get(),oe,me),G=(0,I.g)(Y.WM.get(),Xe,me[3]/(0,I.l)(Xe));return(0,I.a)(pe,G,me)}function Ye(me,oe){const pe=(0,I.b)(Y.WM.get(),oe,me),Xe=(0,I.l)(pe),G=de(me),Z=G+Math.abs(G-Xe);return(0,U.ZF)(G/Z)}const Me=(0,L.c)();function Re(me,oe,pe,Xe){const G=(0,I.b)(Me,oe,me);switch(pe){case W.X:{const Z=(0,U.jE)(G,Me)[2];return(0,I.s)(Xe,-Math.sin(Z),Math.cos(Z),0)}case W.Y:{const Z=(0,U.jE)(G,Me),q=Z[1],X=Z[2],te=Math.sin(q);return(0,I.s)(Xe,-te*Math.cos(X),-te*Math.sin(X),Math.cos(q))}case W.Z:return(0,I.n)(Xe,G);default:return}}function Ee(me,oe){const pe=(0,I.b)(et,oe,me);return(0,I.l)(pe)-me[3]}function Ge(me,oe){const pe=(0,I.d)(me,oe),Xe=de(me);return pe<=Xe*Xe}const et=(0,L.c)(),ce=ae();Object.freeze(Object.defineProperty({__proto__:null,altitudeAt:Ee,angleToSilhouette:Ye,axisAt:Re,clear:function ee(me){me[0]=me[1]=me[2]=me[3]=0},closestPoint:function ye(me,oe,pe){return Oe(me,oe,pe)?pe:((0,re.JI)(oe,me,pe),Ve(me,pe,pe))},closestPointOnSilhouette:ge,containsPoint:Ge,copy:he,create:ae,distanceToSilhouette:function at(me,oe){const pe=(0,I.b)(Y.WM.get(),oe,me),Xe=(0,I.p)(pe);return Math.sqrt(Math.abs(Xe-me[3]*me[3]))},elevate:function Ae(me,oe,pe){return me!==pe&&(0,I.c)(pe,me),pe[3]=me[3]+oe,pe},fromCenterAndRadius:function ne(me,oe){return(0,D.f)(me[0],me[1],me[2],oe)},fromRadius:function J(me,oe){return me[0]=me[1]=me[2]=0,me[3]=oe,me},fromValues:function ve(me,oe,pe,Xe){return(0,D.f)(me,oe,pe,Xe)},getCenter:xe,getRadius:de,intersectRay:Oe,intersectRayClosestSilhouette:function be(me,oe,pe){if(Oe(me,oe,pe))return pe;const Xe=ge(me,oe,Y.WM.get());return(0,I.a)(pe,oe.origin,(0,I.g)(Y.WM.get(),oe.direction,(0,I.i)(oe.origin,Xe)/(0,I.l)(oe.direction))),pe},intersectsRay:qe,projectPoint:Ve,setAltitudeAt:function Ie(me,oe,pe,Xe){const G=Ee(me,oe),Z=Re(me,oe,W.Z,et),q=(0,I.g)(et,Z,pe-G);return(0,I.a)(Xe,oe,q)},setExtent:function Pe(me,oe,pe){return S.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),me===pe?pe:he(me,pe)},tmpSphere:ce,wrap:function K(me){return me}},Symbol.toStringTag,{value:"Module"}))},72507:(Te,ie,v)=>{v.d(ie,{a:()=>U,b:()=>I,n:()=>z,s:()=>H,t:()=>S});var R=v(97277);function S(M,D,W){if(M.count!==D.count)return void R.c.error("source and destination buffers need to have the same number of elements");const re=M.count,se=W[0],Y=W[1],ae=W[2],he=W[4],ne=W[5],K=W[6],ee=W[8],J=W[9],de=W[10],xe=W[12],ve=W[13],Ae=W[14],Pe=M.typedBuffer,Oe=M.typedBufferStride,Je=D.typedBuffer,qe=D.typedBufferStride;for(let be=0;be<re;be++){const ge=be*Oe,ye=be*qe,Ve=Je[ye],at=Je[ye+1],Ye=Je[ye+2];Pe[ge]=se*Ve+he*at+ee*Ye+xe,Pe[ge+1]=Y*Ve+ne*at+J*Ye+ve,Pe[ge+2]=ae*Ve+K*at+de*Ye+Ae}}function U(M,D,W){if(M.count!==D.count)return void R.c.error("source and destination buffers need to have the same number of elements");const re=M.count,se=W[0],Y=W[1],ae=W[2],he=W[3],ne=W[4],K=W[5],ee=W[6],J=W[7],de=W[8],xe=M.typedBuffer,ve=M.typedBufferStride,Ae=D.typedBuffer,Pe=D.typedBufferStride;for(let Oe=0;Oe<re;Oe++){const Je=Oe*ve,qe=Oe*Pe,be=Ae[qe],ge=Ae[qe+1],ye=Ae[qe+2];xe[Je]=se*be+he*ge+ee*ye,xe[Je+1]=Y*be+ne*ge+J*ye,xe[Je+2]=ae*be+K*ge+de*ye}}function H(M,D,W){const re=Math.min(M.count,D.count),se=M.typedBuffer,Y=M.typedBufferStride,ae=D.typedBuffer,he=D.typedBufferStride;for(let ne=0;ne<re;ne++){const K=ne*Y,ee=ne*he;se[K]=W*ae[ee],se[K+1]=W*ae[ee+1],se[K+2]=W*ae[ee+2]}}function z(M,D){const W=Math.min(M.count,D.count),re=M.typedBuffer,se=M.typedBufferStride,Y=D.typedBuffer,ae=D.typedBufferStride;for(let he=0;he<W;he++){const ne=he*se,K=he*ae,ee=Y[K],J=Y[K+1],de=Y[K+2],xe=ee*ee+J*J+de*de;if(xe>0){const ve=1/Math.sqrt(xe);re[ne]=ve*ee,re[ne+1]=ve*J,re[ne+2]=ve*de}}}function I(M,D,W){const re=Math.min(M.count,D.count),se=M.typedBuffer,Y=M.typedBufferStride,ae=D.typedBuffer,he=D.typedBufferStride;for(let ne=0;ne<re;ne++){const K=ne*Y,ee=ne*he;se[K]=ae[ee]>>W,se[K+1]=ae[ee+1]>>W,se[K+2]=ae[ee+2]>>W}}Object.freeze(Object.defineProperty({__proto__:null,normalize:z,scale:H,shiftRight:I,transformMat3:U,transformMat4:S},Symbol.toStringTag,{value:"Module"}))},93916:(Te,ie,v)=>{function R(H,z,I){const L=H.typedBuffer,M=H.typedBufferStride,D=z.typedBuffer,W=z.typedBufferStride,re=I?I.count:z.count;let se=(I&&I.dstIndex?I.dstIndex:0)*M,Y=(I&&I.srcIndex?I.srcIndex:0)*W;for(let ae=0;ae<re;++ae)L[se]=D[Y],L[se+1]=D[Y+1],L[se+2]=D[Y+2],se+=M,Y+=W}function S(H,z,I,L,M){const D=H.typedBuffer,W=H.typedBufferStride,re=M?.count??H.count;let se=(M?.dstIndex??0)*W;for(let Y=0;Y<re;++Y)D[se]=z,D[se+1]=I,D[se+2]=L,se+=W}v.d(ie,{c:()=>R,f:()=>S}),Object.freeze(Object.defineProperty({__proto__:null,copy:R,fill:S},Symbol.toStringTag,{value:"Module"}))},49533:(Te,ie,v)=>{function R(){return new Float32Array(3)}function S(ne){const K=new Float32Array(3);return K[0]=ne[0],K[1]=ne[1],K[2]=ne[2],K}function U(ne,K,ee){const J=new Float32Array(3);return J[0]=ne,J[1]=K,J[2]=ee,J}function z(){return R()}function I(){return U(1,1,1)}function L(){return U(1,0,0)}function M(){return U(0,1,0)}function D(){return U(0,0,1)}v.d(ie,{b:()=>S,c:()=>R,f:()=>U});const W=z(),re=I(),se=L(),Y=M(),ae=D();Object.freeze(Object.defineProperty({__proto__:null,ONES:re,UNIT_X:se,UNIT_Y:Y,UNIT_Z:ae,ZEROS:W,clone:S,create:R,createView:function H(ne,K){return new Float32Array(ne,K,3)},fromValues:U,ones:I,unitX:L,unitY:M,unitZ:D,zeros:z},Symbol.toStringTag,{value:"Module"}))},22043:(Te,ie,v)=>{v.d(ie,{r:()=>R});class R{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(U,H){return this._outer.get(U)?.get(H)}set(U,H,z){const I=this._outer.get(U);I?I.set(H,z):this._outer.set(U,new Map([[H,z]]))}delete(U,H){const z=this._outer.get(U);z&&(z.delete(H),0===z.size&&this._outer.delete(U))}forEach(U){this._outer.forEach((H,z)=>U(H,z))}}},93668:(Te,ie,v)=>{v.d(ie,{x:()=>S});var R=v(16746);class S{constructor(z){this._allocator=z,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,R.Y)(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const z=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*U);this._items.length=Math.min(z,this._items.length),this._itemsPtr=0}_grow(){for(let z=0;z<Math.max(8,Math.min(this._items.length,U));z++)this._items.push(this._allocator())}}const U=1024},97277:(Te,ie,v)=>{v.d(ie,{c:()=>S});const S=v(28191).Z.getLogger("esri.views.3d.support.buffer.math")},32684:(Te,ie,v)=>{v.d(ie,{JI:()=>he,Ue:()=>I,re:()=>D}),v(19420);var S=v(93668),U=v(92950),H=v(77765);function I(K){return K?L((0,H.a)(K.origin),(0,H.a)(K.direction)):L((0,H.c)(),(0,H.c)())}function L(K,ee){return{origin:K,direction:ee}}function D(K,ee){const J=ne.get();return J.origin=K,J.direction=ee,J}function he(K,ee,J){const de=(0,U.e)(K.direction,(0,U.b)(J,ee,K.origin));return(0,U.a)(J,K.origin,(0,U.g)(J,K.direction,de)),J}v(82309);const ne=new S.x(()=>I())},84877:(Te,ie,v)=>{v.d(ie,{EU:()=>I});var R=v(93142),S=v(92950),U=v(77765);function I(W,re){const se=(0,S.e)(W,re)/((0,S.l)(W)*(0,S.l)(re));return-(0,R.ZF)(se)}(0,U.c)(),(0,U.c)()},82309:(Te,ie,v)=>{v.d(ie,{MP:()=>he,WM:()=>se});var R=v(84625),S=v(16746),U=v(53251),H=v(23160),z=v(29042),I=v(83457),L=v(77765),M=v(91746);class D{constructor(ee,J,de){this._itemByteSize=ee,this._itemCreate=J,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(de/this._itemByteSize)}get(){0===this._itemsPtr&&(0,S.Y)(()=>this._reset());const ee=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=ee;){const J=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let de=0;de<this._itemsPerBuffer;++de)this._items.push(this._itemCreate(J,de*this._itemByteSize));this._buffers.push(J)}return this._items[this._itemsPtr++]}_reset(){const ee=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>ee;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(ee=W){return new D(16,I.c,ee)}static createVec3f64(ee=W){return new D(24,L.b,ee)}static createVec4f64(ee=W){return new D(32,M.a,ee)}static createMat3f64(ee=W){return new D(72,U.a,ee)}static createMat4f64(ee=W){return new D(128,H.a,ee)}static createQuatf64(ee=W){return new D(32,z.c,ee)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const W=4*R.Y8.KILOBYTES,se=(D.createVec2f64(),D.createVec3f64()),he=(D.createVec4f64(),D.createMat3f64(),D.createMat4f64());D.createQuatf64()},86062:(Te,ie,v)=>{v.r(ie),v.d(ie,{fetch:()=>Ds,gltfToEngineResources:()=>ni,parseUrl:()=>ai});var R=v(71670),S=v(29322),U=v(53661),H=v(38974),z=v(53251),I=v(64544),L=v(23160),M=v(92950),D=v(77765),W=v(73327),re=v(9565),se=v(72507),Y=v(41859),ae=v(11162),he=v(45981),ne=v(931),K=v(44229),ee=v(67894),J=v(40334),de=v(12288);function xe(A){if((0,U.Wi)(A))return null;const x=(0,U.pC)(A.offset)?A.offset:de.Z,C=(0,U.pC)(A.rotation)?A.rotation:0,y=(0,U.pC)(A.scale)?A.scale:de.O,N=(0,J.f)(1,0,0,0,1,0,x[0],x[1],1),V=(0,J.f)(Math.cos(C),-Math.sin(C),0,Math.sin(C),Math.cos(C),0,0,0,1),j=(0,J.f)(y[0],0,0,0,y[1],0,0,0,1),$=(0,J.c)();return(0,H.m)($,V,j),(0,H.m)($,N,$),$}class ve{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class Ae{constructor(x,C,y){this.name=x,this.lodThreshold=C,this.pivotOffset=y,this.stageResources=new ve,this.numberOfVertices=0}}var Pe=v(1897),Oe=v(11823),Je=v(84625),qe=v(32995),be=v(28191),ge=v(22043),ye=v(30801),Ve=v(66914),at=v(78987),Ye=v(49197),Me=v(2754),Re=v(13878);function Ee(A){if(A.length<Re.DB)return Array.from(A);if(Array.isArray(A))return Float64Array.from(A);switch(A.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(A);case 2:return Uint16Array.from(A);case 4:return Float32Array.from(A);default:return Float64Array.from(A)}}var Ie=v(22286),Ge=v(12042);class et{constructor(x,C,y,N){this.primitiveIndices=x,this._numIndexPerPrimitive=C,this.indices=y,this.position=N,this._children=void 0,(0,Ge.hu)(x.length>=1),(0,Ge.hu)(y.length%this._numIndexPerPrimitive==0),(0,Ge.hu)(y.length>=x.length*this._numIndexPerPrimitive),(0,Ge.hu)(3===N.size||4===N.size);const{data:V,size:j}=N,$=x.length;let k=j*y[this._numIndexPerPrimitive*x[0]];ce.clear(),ce.push(k);const Q=(0,D.f)(V[k],V[k+1],V[k+2]),_e=(0,D.a)(Q);for(let Le=0;Le<$;++Le){const Ne=this._numIndexPerPrimitive*x[Le];for(let ze=0;ze<this._numIndexPerPrimitive;++ze){k=j*y[Ne+ze],ce.push(k);let $e=V[k];Q[0]=Math.min($e,Q[0]),_e[0]=Math.max($e,_e[0]),$e=V[k+1],Q[1]=Math.min($e,Q[1]),_e[1]=Math.max($e,_e[1]),$e=V[k+2],Q[2]=Math.min($e,Q[2]),_e[2]=Math.max($e,_e[2])}}this.bbMin=Q,this.bbMax=_e;const De=(0,M.h)((0,D.c)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(_e[0]-Q[0],_e[1]-Q[1]),_e[2]-Q[2]);let He=this.radius*this.radius;for(let Le=0;Le<ce.length;++Le){k=ce.getItemAt(Le);const Ne=V[k]-De[0],ze=V[k+1]-De[1],$e=V[k+2]-De[2],Ze=Ne*Ne+ze*ze+$e*$e;if(Ze<=He)continue;const ct=Math.sqrt(Ze),ht=.5*(ct-this.radius);this.radius=this.radius+ht,He=this.radius*this.radius;const lt=ht/ct;De[0]+=Ne*lt,De[1]+=ze*lt,De[2]+=$e*lt}this.center=De,ce.clear()}getChildren(){if(this._children||(0,M.d)(this.bbMin,this.bbMax)<=1)return this._children;const x=(0,M.h)((0,D.c)(),this.bbMin,this.bbMax,.5),C=this.primitiveIndices.length,y=new Uint8Array(C),N=new Array(8);for(let Q=0;Q<8;++Q)N[Q]=0;const{data:V,size:j}=this.position;for(let Q=0;Q<C;++Q){let _e=0;const De=this._numIndexPerPrimitive*this.primitiveIndices[Q];let He=j*this.indices[De],Le=V[He],Ne=V[He+1],ze=V[He+2];for(let $e=1;$e<this._numIndexPerPrimitive;++$e){He=j*this.indices[De+$e];const Ze=V[He],ct=V[He+1],ht=V[He+2];Ze<Le&&(Le=Ze),ct<Ne&&(Ne=ct),ht<ze&&(ze=ht)}Le<x[0]&&(_e|=1),Ne<x[1]&&(_e|=2),ze<x[2]&&(_e|=4),y[Q]=_e,++N[_e]}let $=0;for(let Q=0;Q<8;++Q)N[Q]>0&&++$;if($<2)return;const k=new Array(8);for(let Q=0;Q<8;++Q)k[Q]=N[Q]>0?new Uint32Array(N[Q]):void 0;for(let Q=0;Q<8;++Q)N[Q]=0;for(let Q=0;Q<C;++Q){const _e=y[Q];k[_e][N[_e]++]=this.primitiveIndices[Q]}this._children=new Array;for(let Q=0;Q<8;++Q)void 0!==k[Q]&&this._children.push(new et(k[Q],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){ce.prune()}}const ce=new Ie.Z({deallocator:null});var Ce=v(25472),me=v(25207),oe=v(93668),pe=v(19511);function Se(A,x,C){return(0,M.b)(dt,x,A),(0,M.b)(mt,C,A),(0,M.l)((0,M.f)(dt,dt,mt))/2}v(82309),new oe.x(pe.Ue),new oe.x(()=>function G(A){return A?{p0:(0,D.a)(A.p0),p1:(0,D.a)(A.p1),p2:(0,D.a)(A.p2)}:{p0:(0,D.c)(),p1:(0,D.c)(),p2:(0,D.c)()}}());const dt=(0,D.c)(),mt=(0,D.c)(),nt=(0,D.c)(),ft=(0,D.c)(),Rt=(0,D.c)(),ut=(0,D.c)();var vt=v(8330),Dt=v(29962);class bt{constructor(x){this.channel=x,this.id=(0,Dt.D)()}}var Ke=v(51663);v(58013),(0,D.c)(),new Float32Array(6);class Pt extends Ce.c{constructor(x,C,y=[],N=null,V=me.U.Mesh,j=null,$=-1){super(),this.material=x,this.mapPositions=N,this.type=V,this.objectAndLayerIdColor=j,this.edgeIndicesLength=$,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[k,Q]of C)Q&&this._vertexAttributes.set(k,{...Q});if(null==y||0===y.length){const k=function It(A){const x=A.values().next().value;return null==x?0:x.data.length/x.size}(this._vertexAttributes),Q=(0,vt.p)(k);this.edgeIndicesLength=this.edgeIndicesLength<0?k:this.edgeIndicesLength;for(const _e of this._vertexAttributes.keys())this._indices.set(_e,Q)}else for(const[k,Q]of y)Q&&(this._indices.set(k,(0,vt.mi)(Q)),k===Ke.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(k).length:this.edgeIndicesLength))}instantiate(x={}){const C=new Pt(x.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach((y,N)=>{y.exclusive=!1,C._vertexAttributes.set(N,y)}),this._indices.forEach((y,N)=>C._indices.set(N,y)),C._boundingInfo=this._boundingInfo,C.transformation=x.transformation||this.transformation,C}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(x){let C=this._vertexAttributes.get(x);return C&&!C.exclusive&&(C={...C,exclusive:!0,data:Ee(C.data)},this._vertexAttributes.set(x,C)),C}get indices(){return this._indices}get indexCount(){const x=this._indices.values().next().value;return x?x.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,U.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(x){return!!(this.type===me.U.Mesh?this._computeAttachmentOriginTriangles(x):this.type===me.U.Line?this._computeAttachmentOriginLines(x):this._computeAttachmentOriginPoints(x))&&((0,U.pC)(this._transformation)&&(0,M.m)(x,x,this._transformation),!0)}_computeAttachmentOriginTriangles(x){const C=this.indices.get(Ke.T.POSITION);return function Et(A,x,C){if(!A||!x)return!1;const{size:y,data:N}=A;(0,M.s)(C,0,0,0),(0,M.s)(ut,0,0,0);let V=0,j=0;for(let $=0;$<x.length-2;$+=3){const k=x[$+0]*y,Q=x[$+1]*y,_e=x[$+2]*y;(0,M.s)(nt,N[k+0],N[k+1],N[k+2]),(0,M.s)(ft,N[Q+0],N[Q+1],N[Q+2]),(0,M.s)(Rt,N[_e+0],N[_e+1],N[_e+2]);const De=Se(nt,ft,Rt);De?((0,M.a)(nt,nt,ft),(0,M.a)(nt,nt,Rt),(0,M.g)(nt,nt,1/3*De),(0,M.a)(C,C,nt),V+=De):((0,M.a)(ut,ut,nt),(0,M.a)(ut,ut,ft),(0,M.a)(ut,ut,Rt),j+=3)}return!(0===j&&0===V||(0!==V?((0,M.g)(C,C,1/V),0):0===j||((0,M.g)(C,ut,1/j),0)))}(this.vertexAttributes.get(Ke.T.POSITION),C,x)}_computeAttachmentOriginLines(x){const C=this.vertexAttributes.get(Ke.T.POSITION),y=this.indices.get(Ke.T.POSITION);return function xt(A,x,C,y){if(!A)return!1;(0,M.s)(y,0,0,0),(0,M.s)(ut,0,0,0);let N=0,V=0;const{size:j,data:$}=A,k=x?x.length-1:$.length/j-1,Q=k+(C?2:0);for(let _e=0;_e<Q;_e+=2){const De=_e<k?_e:k,He=_e<k?_e+1:0,Le=(x?x[De]:De)*j,Ne=(x?x[He]:He)*j;nt[0]=$[Le],nt[1]=$[Le+1],nt[2]=$[Le+2],ft[0]=$[Ne],ft[1]=$[Ne+1],ft[2]=$[Ne+2],(0,M.g)(nt,(0,M.a)(nt,nt,ft),.5);const ze=(0,M.j)(nt,ft);ze>0?((0,M.a)(y,y,(0,M.g)(nt,nt,ze)),N+=ze):0===N&&((0,M.a)(ut,ut,nt),V++)}return 0!==N?((0,M.g)(y,y,1/N),!0):0!==V&&((0,M.g)(y,ut,1/V),!0)}(C,y,y&&function wt(A,x,C){return!(!("isClosed"in A)||!A.isClosed)&&(C?C.length>2:x.data.length>6)}(this.material.parameters,C,y),x)}_computeAttachmentOriginPoints(x){const C=this.indices.get(Ke.T.POSITION);return function Tt(A,x,C){if(!A||!x)return!1;const{size:y,data:N}=A;(0,M.s)(C,0,0,0);let V=-1,j=0;for(let $=0;$<x.length;$++){const k=x[$]*y;V!==k&&(C[0]+=N[k+0],C[1]+=N[k+1],C[2]+=N[k+2],j++),V=k}return j>1&&(0,M.g)(C,C,1/j),j>0}(this.vertexAttributes.get(Ke.T.POSITION),C,x)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const x=this.indices.get(Ke.T.POSITION),C=this.vertexAttributes.get(Ke.T.POSITION);if(!x||0===x.length||!C)return null;const y=this.type===me.U.Mesh?3:1;(0,Ge.hu)(x.length%y==0,"Indexing error: "+x.length+" not divisible by "+y);const N=(0,vt.p)(x.length/y);return new et(N,y,x,C)}get transformation(){return(0,U.Pt)(this._transformation,L.I)}set transformation(x){this._transformation=x&&x!==L.I?(0,L.b)(x):null}get shaderTransformation(){return(0,U.pC)(this._shaderTransformer)?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(x){this._shaderTransformer=x}get hasVolatileTransformation(){return(0,U.pC)(this._shaderTransformer)}addHighlight(){const x=new bt(Me.V_.Highlight);return this.highlights=function Vt(A,x){return(0,U.Wi)(A)&&(A=[]),A.push(x),A}(this.highlights,x),x}removeHighlight(x){this.highlights=function jt(A,x){if((0,U.Wi)(A))return null;const C=A.filter(y=>y!==x);return 0===C.length?null:C}(this.highlights,x)}}var Ut=v(31385),Bt=v(95442),Ot=v(93142),zt=v(55050),er=v(90103),At=v(91746),Ct=v(93249),Kt=v(4058),Wt=v(99106),Lt=v(7427),Nt=v(94391);class Yt extends Wt.K{constructor(){super(...arguments),this.color=(0,At.f)(1,1,1,1)}}Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Yt,build:function tr(){const A=new Lt.kG;return A.include(Ct.k),A.fragment.uniforms.add([new Nt.A("tex",x=>x.texture),new Kt.N("uColor",x=>x.color)]),A.fragment.code.add(Wt.H`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),A}},Symbol.toStringTag,{value:"Module"}));var Gt=v(74792);let Ar;var rr,A;(A=rr||(rr={}))[A.ETC1_RGB=0]="ETC1_RGB",A[A.ETC2_RGBA=1]="ETC2_RGBA",A[A.BC1_RGB=2]="BC1_RGB",A[A.BC3_RGBA=3]="BC3_RGBA",A[A.BC4_R=4]="BC4_R",A[A.BC5_RG=5]="BC5_RG",A[A.BC7_M6_RGB=6]="BC7_M6_RGB",A[A.BC7_M5_RGBA=7]="BC7_M5_RGBA",A[A.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",A[A.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",A[A.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",A[A.ATC_RGB=11]="ATC_RGB",A[A.ATC_RGBA=12]="ATC_RGBA",A[A.FXT1_RGB=17]="FXT1_RGB",A[A.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",A[A.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",A[A.ETC2_EAC_R11=20]="ETC2_EAC_R11",A[A.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",A[A.RGBA32=13]="RGBA32",A[A.RGB565=14]="RGB565",A[A.BGR565=15]="BGR565",A[A.RGBA4444=16]="RGBA4444";var we=v(69923),Qt=v(74697),Fr=v(68267);let Ft=null,vr=null;function Hr(){return Cr.apply(this,arguments)}function Cr(){return Cr=(0,R.Z)(function*(){return(0,U.Wi)(vr)&&(vr=function mr(){if((0,U.Wi)(Ar)){const A=x=>(0,Gt.V)(`esri/libs/basisu/${x}`);Ar=v.e(6400).then(v.bind(v,6400)).then(x=>x.b).then(({default:x})=>x({locateFile:A}).then(C=>(C.initializeBasis(),delete C.then,C)))}return Ar}(),Ft=yield vr),vr}),Cr.apply(this,arguments)}function Wr(A,x,C,y,N){const V=(0,Fr.RG)(x?we.q_.COMPRESSED_RGBA8_ETC2_EAC:we.q_.COMPRESSED_RGB8_ETC2);return Math.ceil(C*y*V*(N&&A>1?(4**A-1)/(3*4**(A-1)):1))}function Vr(A){return A.getNumImages()>=1&&!A.isUASTC()}function jr(A){return A.getFaces()>=1&&A.isETC1S()}function Dr(){return Dr=(0,R.Z)(function*(A,x,C){(0,U.Wi)(Ft)&&(Ft=yield Hr());const y=new Ft.BasisFile(new Uint8Array(C));if(!Vr(y))return null;y.startTranscoding();const N=zr(A,x,y.getNumLevels(0),y.getHasAlpha(),y.getImageWidth(0,0),y.getImageHeight(0,0),(V,j)=>y.getImageTranscodedSizeInBytes(0,V,j),(V,j,$)=>y.transcodeImage($,0,V,j,0,0));return y.close(),y.delete(),N}),Dr.apply(this,arguments)}function br(){return br=(0,R.Z)(function*(A,x,C){(0,U.Wi)(Ft)&&(Ft=yield Hr());const y=new Ft.KTX2File(new Uint8Array(C));if(!jr(y))return null;y.startTranscoding();const N=zr(A,x,y.getLevels(),y.getHasAlpha(),y.getWidth(),y.getHeight(),(V,j)=>y.getImageTranscodedSizeInBytes(V,0,0,j),(V,j,$)=>y.transcodeImage($,V,0,0,j,0,-1,-1));return y.close(),y.delete(),N}),br.apply(this,arguments)}function zr(A,x,C,y,N,V,j,$){const{compressedTextureETC:k,compressedTextureS3TC:Q}=A.capabilities,[_e,De]=k?y?[rr.ETC2_RGBA,we.q_.COMPRESSED_RGBA8_ETC2_EAC]:[rr.ETC1_RGB,we.q_.COMPRESSED_RGB8_ETC2]:Q?y?[rr.BC3_RGBA,we.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[rr.BC1_RGB,we.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[rr.RGBA32,we.VI.RGBA],He=x.hasMipmap?C:Math.min(1,C),Le=[];for(let Ze=0;Ze<He;Ze++)Le.push(new Uint8Array(j(Ze,_e))),$(Ze,_e,Le[Ze]);const Ne=Le.length>1,ze=Ne?we.cw.LINEAR_MIPMAP_LINEAR:we.cw.LINEAR,$e={...x,samplingMode:ze,hasMipmap:Ne,internalFormat:De,width:N,height:V};return new Qt.x(A,$e,{type:"compressed",levels:Le})}const dr=be.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function yr(A){return A.charCodeAt(0)+(A.charCodeAt(1)<<8)+(A.charCodeAt(2)<<16)+(A.charCodeAt(3)<<24)}const mi=yr("DXT1"),vi=yr("DXT3"),gi=yr("DXT5");var ur,yi=v(38848),Kr=v(87652),Si=v(2512);class ar extends Ce.c{constructor(x,C){super(),this._data=x,this.type=me.U.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Bt.Z,this._passParameters=new Yt,this.params=C||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:we.e8.REPEAT,t:we.e8.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||Me.CE.STRETCH,this.estimatedTexMemRequired=ar._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const x=this._data;(0,U.Wi)(x)||(x instanceof HTMLVideoElement?this._startPreloadVideoElement(x):x instanceof HTMLImageElement&&this._startPreloadImageElement(x))}_startPreloadVideoElement(x){if(!((0,zt.jc)(x.src)||"auto"===x.preload&&x.crossOrigin)){x.preload="auto",x.crossOrigin="anonymous";const C=!x.paused;if(x.src=x.src,C&&x.autoplay){const y=()=>{x.removeEventListener("canplay",y),x.play()};x.addEventListener("canplay",y)}}}_startPreloadImageElement(x){(0,zt.HK)(x.src)||(0,zt.jc)(x.src)||x.crossOrigin||(x.crossOrigin="anonymous",x.src=x.src)}static _getDataDimensions(x){return x instanceof HTMLVideoElement?{width:x.videoWidth,height:x.videoHeight}:x}static _estimateTexMemRequired(x,C){if((0,U.Wi)(x))return 0;if((0,Re.eP)(x)||(0,Re.lq)(x))return C.encoding===Me.Ti.KTX2_ENCODING?function li(A,x){if((0,U.Wi)(Ft))return A.byteLength;const C=new Ft.KTX2File(new Uint8Array(A)),y=jr(C)?Wr(C.getLevels(),C.getHasAlpha(),C.getWidth(),C.getHeight(),x):0;return C.close(),C.delete(),y}(x,!!C.mipmap):C.encoding===Me.Ti.BASIS_ENCODING?function oi(A,x){if((0,U.Wi)(Ft))return A.byteLength;const C=new Ft.BasisFile(new Uint8Array(A)),y=Vr(C)?Wr(C.getNumLevels(0),C.getHasAlpha(),C.getImageWidth(0,0),C.getImageHeight(0,0),x):0;return C.close(),C.delete(),y}(x,!!C.mipmap):x.byteLength;const{width:y,height:N}=x instanceof Image||x instanceof ImageData||x instanceof HTMLCanvasElement||x instanceof HTMLVideoElement?ar._getDataDimensions(x):C;return(C.mipmap?4/3:1)*y*N*(C.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(x){return{target:we.No.TEXTURE_2D,pixelFormat:we.VI.RGBA,dataType:we.Br.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?we.cw.LINEAR_MIPMAP_LINEAR:we.cw.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?x.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(x,C){if((0,U.pC)(this._glTexture))return this._glTexture;if((0,U.pC)(this._loadingPromise))return this._loadingPromise;const y=this._data;return(0,U.Wi)(y)?(this._glTexture=new Qt.x(x,this._createDescriptor(x),null),this._glTexture):"string"==typeof y?this._loadFromURL(x,C,y):y instanceof Image?this._loadFromImageElement(x,C,y):y instanceof HTMLVideoElement?this._loadFromVideoElement(x,C,y):y instanceof ImageData||y instanceof HTMLCanvasElement?this._loadFromImage(x,y,C):((0,Re.eP)(y)||(0,Re.lq)(y))&&this.params.encoding===Me.Ti.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(x,y)):((0,Re.eP)(y)||(0,Re.lq)(y))&&this.params.encoding===Me.Ti.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(x,y)):((0,Re.eP)(y)||(0,Re.lq)(y))&&this.params.encoding===Me.Ti.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(x,y)):(0,Re.lq)(y)?this._loadFromPixelData(x,y):(0,Re.eP)(y)?this._loadFromPixelData(x,new Uint8Array(y)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(x,C,y){if(!(this._data instanceof HTMLVideoElement)||(0,U.Wi)(this._glTexture)||this._data.readyState<ur.HAVE_CURRENT_DATA||y===this._data.currentTime)return y;if((0,U.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:N,vao:V,sourceTexture:j}=this._powerOfTwoStretchInfo;j.setData(this._data),this._drawStretchedTexture(x,C,N,V,j,this._glTexture)}else{const{videoWidth:N,videoHeight:V}=this._data,{width:j,height:$}=this._glTexture.descriptor;N!==j||V!==$?this._glTexture.updateData(0,0,0,Math.min(N,j),Math.min(V,$),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(x,C){return this._glTexture=function Di(A,x,C){const{textureData:y,internalFormat:N,width:V,height:j}=(0,U.s3)(function bi(A,x){const C=new Int32Array(A,0,31);if(542327876!==C[0])return dr.error("Invalid magic number in DDS header"),null;if(!(4&C[20]))return dr.error("Unsupported format, must contain a FourCC code"),null;const y=C[21];let N,V;switch(y){case mi:N=8,V=we.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case vi:N=16,V=we.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case gi:N=16,V=we.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return dr.error("Unsupported FourCC code:",function fi(A){return String.fromCharCode(255&A,A>>8&255,A>>16&255,A>>24&255)}(y)),null}let j=1,$=C[4],k=C[3];!(3&$)&&!(3&k)||(dr.warn("Rounding up compressed texture size to nearest multiple of 4."),$=$+3&-4,k=k+3&-4);const Q=$,_e=k;let De,He;131072&C[2]&&!1!==x&&(j=Math.max(1,C[7])),1===j||(0,Ot.wt)($)&&(0,Ot.wt)(k)||(dr.warn("Ignoring mipmaps of non power of two sized compressed texture."),j=1);let Le=C[1]+4;const Ne=[];for(let ze=0;ze<j;++ze)He=($+3>>2)*(k+3>>2)*N,De=new Uint8Array(A,Le,He),Ne.push(De),Le+=He,$=Math.max(1,$>>1),k=Math.max(1,k>>1);return{textureData:{type:"compressed",levels:Ne},internalFormat:V,width:Q,height:_e}}(C,x.hasMipmap??!1));return x.samplingMode=y.levels.length>1?we.cw.LINEAR_MIPMAP_LINEAR:we.cw.LINEAR,x.hasMipmap=y.levels.length>1,x.internalFormat=N,x.width=V,x.height=j,new Qt.x(A,x,y)}(x,this._createDescriptor(x),C),this._glTexture}_loadFromKTX2(x,C){return this._loadAsync(()=>function di(A,x,C){return br.apply(this,arguments)}(x,this._createDescriptor(x),C).then(y=>(this._glTexture=y,y)))}_loadFromBasis(x,C){return this._loadAsync(()=>function ci(A,x,C){return Dr.apply(this,arguments)}(x,this._createDescriptor(x),C).then(y=>(this._glTexture=y,y)))}_loadFromPixelData(x,C){(0,Ge.hu)(this.params.width>0&&this.params.height>0);const y=this._createDescriptor(x);return y.pixelFormat=1===this.params.components?we.VI.LUMINANCE:3===this.params.components?we.VI.RGB:we.VI.RGBA,y.width=this.params.width,y.height=this.params.height,this._glTexture=new Qt.x(x,y,C),this._glTexture}_loadFromURL(x,C,y){var N=this;return this._loadAsync(function(){var V=(0,R.Z)(function*(j){const $=yield(0,at.t)(y,{signal:j});return(0,ye.k_)(j),N._loadFromImage(x,$,C)});return function(j){return V.apply(this,arguments)}}())}_loadFromImageElement(x,C,y){var N=this;return y.complete?this._loadFromImage(x,y,C):this._loadAsync(function(){var V=(0,R.Z)(function*(j){const $=yield(0,er.fY)(y,y.src,!1,j);return(0,ye.k_)(j),N._loadFromImage(x,$,C)});return function(j){return V.apply(this,arguments)}}())}_loadFromVideoElement(x,C,y){return y.readyState>=ur.HAVE_CURRENT_DATA?this._loadFromImage(x,y,C):this._loadFromVideoElementAsync(x,C,y)}_loadFromVideoElementAsync(x,C,y){return this._loadAsync(N=>new Promise((V,j)=>{const $=()=>{y.removeEventListener("loadeddata",k),y.removeEventListener("error",Q),(0,U.hw)(_e)},k=()=>{y.readyState>=ur.HAVE_CURRENT_DATA&&($(),V(this._loadFromImage(x,y,C)))},Q=De=>{$(),j(De||new qe.Z("Failed to load video"))};y.addEventListener("loadeddata",k),y.addEventListener("error",Q);const _e=(0,ye.fu)(N,()=>Q((0,ye.zE)()))}))}_loadFromImage(x,C,y){const N=ar._getDataDimensions(C);this.params.width=N.width,this.params.height=N.height;const V=this._createDescriptor(x);return V.pixelFormat=3===this.params.components?we.VI.RGB:we.VI.RGBA,!this._requiresPowerOfTwo(x,V)||(0,Ot.wt)(N.width)&&(0,Ot.wt)(N.height)?(V.width=N.width,V.height=N.height,this._glTexture=new Qt.x(x,V,C),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(x,C,N,V,y),this._glTexture)}_loadAsync(x){const C=new AbortController;this._loadingController=C;const y=x(C.signal);this._loadingPromise=y;const N=()=>{this._loadingController===C&&(this._loadingController=null),this._loadingPromise===y&&(this._loadingPromise=null)};return y.then(N,N),y}_requiresPowerOfTwo(x,C){const y=we.e8.CLAMP_TO_EDGE;return x.type===Kr.zO.WEBGL1&&(C.hasMipmap||!("number"==typeof C.wrapMode?C.wrapMode===y:C.wrapMode.s===y&&C.wrapMode.t===y))}_makePowerOfTwoTexture(x,C,y,N,V){const{width:j,height:$}=y,k=(0,Ot.Sf)(j),Q=(0,Ot.Sf)($);let _e;switch(N.width=k,N.height=Q,this.params.powerOfTwoResizeMode){case Me.CE.PAD:N.textureCoordinateScaleFactor=[j/k,$/Q],_e=new Qt.x(x,N),_e.updateData(0,0,0,j,$,C);break;case Me.CE.STRETCH:case null:case void 0:_e=this._stretchToPowerOfTwo(x,C,N,V());break;default:(0,Ut.Bg)(this.params.powerOfTwoResizeMode)}return N.hasMipmap&&_e.generateMipmap(),_e}_stretchToPowerOfTwo(x,C,y,N){const V=new Qt.x(x,y),j=new Si.X(x,{colorTarget:we.Lm.TEXTURE,depthStencilTarget:we.OU.NONE},V),$=new Qt.x(x,{target:we.No.TEXTURE_2D,pixelFormat:y.pixelFormat,dataType:we.Br.UNSIGNED_BYTE,wrapMode:we.e8.CLAMP_TO_EDGE,samplingMode:we.cw.LINEAR,flipped:!!y.flipped,maxAnisotropy:8,preMultiplyAlpha:y.preMultiplyAlpha},C),k=(0,yi.ow)(x),Q=x.getBoundFramebufferObject();return this._drawStretchedTexture(x,N,j,k,$,V),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:k,sourceTexture:$,framebuffer:j}:(k.dispose(!0),$.dispose(),j.detachColorTexture(),j.dispose()),x.bindFramebuffer(Q),V}_drawStretchedTexture(x,C,y,N,V,j){this._passParameters.texture=V,x.bindFramebuffer(y);const $=x.getViewport();x.setViewport(0,0,j.descriptor.width,j.descriptor.height),x.bindTechnique(C,this._passParameters,null),x.bindVAO(N),x.drawArrays(we.MX.TRIANGLE_STRIP,0,(0,Fr._V)(N,"geometry")),x.bindFramebuffer(null),x.setViewport($.x,$.y,$.width,$.height),this._passParameters.texture=null}unload(){if((0,U.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:x,vao:C,sourceTexture:y}=this._powerOfTwoStretchInfo;C.dispose(!0),y.dispose(),x.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,U.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,U.pC)(this._loadingController)){const x=this._loadingController;this._loadingController=null,this._loadingPromise=null,x.abort()}this.events.emit("unloaded")}}!function(A){A[A.HAVE_NOTHING=0]="HAVE_NOTHING",A[A.HAVE_METADATA=1]="HAVE_METADATA",A[A.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",A[A.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",A[A.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(ur||(ur={}));var nr,Li=v(67087),Sr=v(56108),Ri=v(61462),gt=v(26573),ir=v(5395),hr=v(85950),Ii=v(99381),Gr=v(32051),_r=v(31700);!function(A){A[A.INTEGRATED_MESH=0]="INTEGRATED_MESH",A[A.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",A[A.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",A[A.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",A[A.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",A[A.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",A[A.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",A[A.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",A[A.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",A[A.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",A[A.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",A[A.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",A[A.LASERLINES=12]="LASERLINES",A[A.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",A[A.HUD_MATERIAL=14]="HUD_MATERIAL",A[A.LABEL_MATERIAL=15]="LABEL_MATERIAL",A[A.LINE_CALLOUTS=16]="LINE_CALLOUTS",A[A.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",A[A.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",A[A.DRAPED_WATER=19]="DRAPED_WATER",A[A.VOXEL=20]="VOXEL",A[A.MAX_SLOTS=21]="MAX_SLOTS"}(nr||(nr={}));var wi=v(50894),Ui=v(29042),Bi=v(49533),$r=v(33659);const kt=(0,D.c)(),pr=(0,D.c)(),or=(0,D.c)(),Jr=new class Hi{constructor(x=0){this.offset=x,this.sphere=(0,$r.c)(),this.tmpVertex=(0,D.c)()}applyToVertex(x,C,y){const N=this.objectTransform.transform;let V=N[0]*x+N[4]*C+N[8]*y+N[12],j=N[1]*x+N[5]*C+N[9]*y+N[13],$=N[2]*x+N[6]*C+N[10]*y+N[14];const k=this.offset/Math.sqrt(V*V+j*j+$*$);V+=V*k,j+=j*k,$+=$*k;const Q=this.objectTransform.inverse;return this.tmpVertex[0]=Q[0]*V+Q[4]*j+Q[8]*$+Q[12],this.tmpVertex[1]=Q[1]*V+Q[5]*j+Q[9]*$+Q[13],this.tmpVertex[2]=Q[2]*V+Q[6]*j+Q[10]*$+Q[14],this.tmpVertex}applyToMinMax(x,C){const y=this.offset/Math.sqrt(x[0]*x[0]+x[1]*x[1]+x[2]*x[2]);x[0]+=x[0]*y,x[1]+=x[1]*y,x[2]+=x[2]*y;const N=this.offset/Math.sqrt(C[0]*C[0]+C[1]*C[1]+C[2]*C[2]);C[0]+=C[0]*N,C[1]+=C[1]*N,C[2]+=C[2]*N}applyToAabb(x){const C=this.offset/Math.sqrt(x[0]*x[0]+x[1]*x[1]+x[2]*x[2]);x[0]+=x[0]*C,x[1]+=x[1]*C,x[2]+=x[2]*C;const y=this.offset/Math.sqrt(x[3]*x[3]+x[4]*x[4]+x[5]*x[5]);return x[3]+=x[3]*y,x[4]+=x[4]*y,x[5]+=x[5]*y,x}applyToBoundingSphere(x){const C=Math.sqrt(x[0]*x[0]+x[1]*x[1]+x[2]*x[2]),y=this.offset/C;return this.sphere[0]=x[0]+x[0]*y,this.sphere[1]=x[1]+x[1]*y,this.sphere[2]=x[2]+x[2]*y,this.sphere[3]=x[3]+x[3]*this.offset/C,this.sphere}};new class Fi{constructor(x=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,D.c)(),this._mbs=(0,$r.c)(),this._obb={center:(0,D.c)(),halfSize:(0,Bi.c)(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(x)}_resetOffset(x){this._offset=x,this._totalOffset=x}set offset(x){this._resetOffset(x)}get offset(){return this._offset}set componentOffset(x){this._totalOffset=this._offset+x}set localOrigin(x){this.componentLocalOriginLength=Math.sqrt(x[0]*x[0]+x[1]*x[1]+x[2]*x[2])}applyToVertex(x,C,y){const N=x,V=C,j=y+this.componentLocalOriginLength,$=this._totalOffset/Math.sqrt(N*N+V*V+j*j);return this._tmpVertex[0]=x+N*$,this._tmpVertex[1]=C+V*$,this._tmpVertex[2]=y+j*$,this._tmpVertex}applyToAabb(x){const C=x[0],y=x[1],N=x[2]+this.componentLocalOriginLength,V=x[3],j=x[4],$=x[5]+this.componentLocalOriginLength,k=C*V<0?0:Math.min(Math.abs(C),Math.abs(V)),Q=y*j<0?0:Math.min(Math.abs(y),Math.abs(j)),_e=N*$<0?0:Math.min(Math.abs(N),Math.abs($)),De=Math.sqrt(k*k+Q*Q+_e*_e);if(De<this._totalOffset)return x[0]-=C<0?this._totalOffset:0,x[1]-=y<0?this._totalOffset:0,x[2]-=N<0?this._totalOffset:0,x[3]+=V>0?this._totalOffset:0,x[4]+=j>0?this._totalOffset:0,x[5]+=$>0?this._totalOffset:0,x;const He=Math.max(Math.abs(C),Math.abs(V)),Le=Math.max(Math.abs(y),Math.abs(j)),Ne=Math.max(Math.abs(N),Math.abs($)),ze=Math.sqrt(He*He+Le*Le+Ne*Ne),$e=this._totalOffset/ze,Ze=this._totalOffset/De;return x[0]+=C*(C>0?$e:Ze),x[1]+=y*(y>0?$e:Ze),x[2]+=N*(N>0?$e:Ze),x[3]+=V*(V<0?$e:Ze),x[4]+=j*(j<0?$e:Ze),x[5]+=$*($<0?$e:Ze),x}applyToMbs(x){const C=Math.sqrt(x[0]*x[0]+x[1]*x[1]+x[2]*x[2]),y=this._totalOffset/C;return this._mbs[0]=x[0]+x[0]*y,this._mbs[1]=x[1]+x[1]*y,this._mbs[2]=x[2]+x[2]*y,this._mbs[3]=x[3]+x[3]*this._totalOffset/C,this._mbs}applyToObb(x){const C=x.center,y=this._totalOffset/Math.sqrt(C[0]*C[0]+C[1]*C[1]+C[2]*C[2]);this._obb.center[0]=C[0]+C[0]*y,this._obb.center[1]=C[1]+C[1]*y,this._obb.center[2]=C[2]+C[2]*y,(0,M.q)(this._obb.halfSize,x.halfSize,x.quaternion),(0,M.a)(this._obb.halfSize,this._obb.halfSize,x.center);const N=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*N,this._obb.halfSize[1]+=this._obb.halfSize[1]*N,this._obb.halfSize[2]+=this._obb.halfSize[2]*N,(0,M.b)(this._obb.halfSize,this._obb.halfSize,x.center),(0,wi.c)(Zr,x.quaternion),(0,M.q)(this._obb.halfSize,this._obb.halfSize,Zr),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=x.quaternion,this._obb}},new class Ni{constructor(x=0){this.offset=x,this.tmpVertex=(0,D.c)()}applyToVertex(x,C,y){const N=x+this.localOrigin[0],V=C+this.localOrigin[1],j=y+this.localOrigin[2],$=this.offset/Math.sqrt(N*N+V*V+j*j);return this.tmpVertex[0]=x+N*$,this.tmpVertex[1]=C+V*$,this.tmpVertex[2]=y+j*$,this.tmpVertex}applyToAabb(x){for(let V=0;V<3;++V)kt[V]=x[0+V]+this.localOrigin[V],pr[V]=x[3+V]+this.localOrigin[V],or[V]=kt[V];const C=this.applyToVertex(kt[0],kt[1],kt[2]);for(let V=0;V<3;++V)x[V]=C[V],x[V+3]=C[V];const y=V=>{const j=this.applyToVertex(V[0],V[1],V[2]);for(let $=0;$<3;++$)x[$+0]=Math.min(x[$+0],j[$]),x[$+3]=Math.max(x[$+3],j[$])};for(let V=1;V<8;++V){for(let j=0;j<3;++j)or[j]=V&1<<j?pr[j]:kt[j];y(or)}let N=0;for(let V=0;V<3;++V)kt[V]*pr[V]<0&&(N|=1<<V);if(0!==N&&7!==N)for(let V=0;V<8;++V)if(!(N&V)){for(let j=0;j<3;++j)or[j]=N[j]?0:V&1<<j?kt[j]:pr[j];y(or)}for(let V=0;V<3;++V)x[V+0]-=this.localOrigin[V],x[V+3]-=this.localOrigin[V];return x}};const Zr=(0,Ui.a)();function Vi(A,x,C,y){const N=C.typedBuffer,V=C.typedBufferStride,j=A.length;y*=V;for(let $=0;$<j;++$){const k=2*A[$];N[y]=x[k],N[y+1]=x[k+1],y+=V}}function Qr(A,x,C,y,N){const V=C.typedBuffer,j=C.typedBufferStride,$=A.length;if(y*=j,null==N||1===N)for(let k=0;k<$;++k){const Q=3*A[k];V[y]=x[Q],V[y+1]=x[Q+1],V[y+2]=x[Q+2],y+=j}else for(let k=0;k<$;++k){const Q=3*A[k];for(let _e=0;_e<N;++_e)V[y]=x[Q],V[y+1]=x[Q+1],V[y+2]=x[Q+2],y+=j}}function kr(A,x,C,y,N=1){const V=C.typedBuffer,j=C.typedBufferStride,$=A.length;if(y*=j,1===N)for(let k=0;k<$;++k){const Q=4*A[k];V[y]=x[Q],V[y+1]=x[Q+1],V[y+2]=x[Q+2],V[y+3]=x[Q+3],y+=j}else for(let k=0;k<$;++k){const Q=4*A[k];for(let _e=0;_e<N;++_e)V[y]=x[Q],V[y+1]=x[Q+1],V[y+2]=x[Q+2],V[y+3]=x[Q+3],y+=j}}function ji(A,x,C,y,N,V=1){if(!C)return void Qr(A,x,y,N,V);const j=y.typedBuffer,$=y.typedBufferStride,k=A.length,Q=C[0],_e=C[1],De=C[2],He=C[4],Le=C[5],Ne=C[6],ze=C[8],$e=C[9],Ze=C[10],ct=C[12],ht=C[13],lt=C[14];N*=$;let _t=0,ot=0,rt=0;const tt=(0,I.y)(C)?it=>{_t=x[it]+ct,ot=x[it+1]+ht,rt=x[it+2]+lt}:it=>{const ke=x[it],Qe=x[it+1],st=x[it+2];_t=Q*ke+He*Qe+ze*st+ct,ot=_e*ke+Le*Qe+$e*st+ht,rt=De*ke+Ne*Qe+Ze*st+lt};if(1===V)for(let it=0;it<k;++it)tt(3*A[it]),j[N]=_t,j[N+1]=ot,j[N+2]=rt,N+=$;else for(let it=0;it<k;++it){tt(3*A[it]);for(let ke=0;ke<V;++ke)j[N]=_t,j[N+1]=ot,j[N+2]=rt,N+=$}}function zi(A,x,C,y,N,V=1){if(!C)return void Qr(A,x,y,N,V);const j=C,$=y.typedBuffer,k=y.typedBufferStride,Q=A.length,_e=j[0],De=j[1],He=j[2],Le=j[4],Ne=j[5],ze=j[6],$e=j[8],Ze=j[9],ct=j[10],ht=!(0,I.z)(j);N*=k;let ot=0,rt=0,tt=0;const it=(0,I.y)(j)?ke=>{ot=x[ke],rt=x[ke+1],tt=x[ke+2]}:ke=>{const Qe=x[ke],st=x[ke+1],pt=x[ke+2];ot=_e*Qe+Le*st+$e*pt,rt=De*Qe+Ne*st+Ze*pt,tt=He*Qe+ze*st+ct*pt};if(1===V)if(ht)for(let ke=0;ke<Q;++ke){it(3*A[ke]);const Qe=ot*ot+rt*rt+tt*tt;if(Qe<.999999&&Qe>1e-6){const st=1/Math.sqrt(Qe);$[N]=ot*st,$[N+1]=rt*st,$[N+2]=tt*st}else $[N]=ot,$[N+1]=rt,$[N+2]=tt;N+=k}else for(let ke=0;ke<Q;++ke)it(3*A[ke]),$[N]=ot,$[N+1]=rt,$[N+2]=tt,N+=k;else for(let ke=0;ke<Q;++ke){if(it(3*A[ke]),ht){const Qe=ot*ot+rt*rt+tt*tt;if(Qe<.999999&&Qe>1e-6){const st=1/Math.sqrt(Qe);ot*=st,rt*=st,tt*=st}}for(let Qe=0;Qe<V;++Qe)$[N]=ot,$[N+1]=rt,$[N+2]=tt,N+=k}}function Ki(A,x,C,y,N,V=1){if(!C)return void kr(A,x,y,N,V);const $=y.typedBuffer,k=y.typedBufferStride,Q=A.length,_e=C[0],De=C[1],He=C[2],Le=C[4],Ne=C[5],ze=C[6],$e=C[8],Ze=C[9],ct=C[10],ht=!(0,I.z)(C);if(N*=k,1===V)for(let ot=0;ot<Q;++ot){const rt=4*A[ot],tt=x[rt],it=x[rt+1],ke=x[rt+2],Qe=x[rt+3];let st=_e*tt+Le*it+$e*ke,pt=De*tt+Ne*it+Ze*ke,Ht=He*tt+ze*it+ct*ke;if(ht){const yt=st*st+pt*pt+Ht*Ht;if(yt<.999999&&yt>1e-6){const sr=1/Math.sqrt(yt);st*=sr,pt*=sr,Ht*=sr}}$[N]=st,$[N+1]=pt,$[N+2]=Ht,$[N+3]=Qe,N+=k}else for(let ot=0;ot<Q;++ot){const rt=4*A[ot],tt=x[rt],it=x[rt+1],ke=x[rt+2],Qe=x[rt+3];let st=_e*tt+Le*it+$e*ke,pt=De*tt+Ne*it+Ze*ke,Ht=He*tt+ze*it+ct*ke;if(ht){const yt=st*st+pt*pt+Ht*Ht;if(yt<.999999&&yt>1e-6){const sr=1/Math.sqrt(yt);st*=sr,pt*=sr,Ht*=sr}}for(let yt=0;yt<V;++yt)$[N]=st,$[N+1]=pt,$[N+2]=Ht,$[N+3]=Qe,N+=k}}function Gi(A,x,C,y,N,V=1){const j=y.typedBuffer,$=y.typedBufferStride,k=A.length;if(N*=$,C!==x.length||4!==C)if(1!==V)if(4!==C)for(let Q=0;Q<k;++Q){const _e=3*A[Q];for(let De=0;De<V;++De)j[N]=x[_e],j[N+1]=x[_e+1],j[N+2]=x[_e+2],j[N+3]=255,N+=$}else for(let Q=0;Q<k;++Q){const _e=4*A[Q];for(let De=0;De<V;++De)j[N]=x[_e],j[N+1]=x[_e+1],j[N+2]=x[_e+2],j[N+3]=x[_e+3],N+=$}else{if(4===C){for(let Q=0;Q<k;++Q){const _e=4*A[Q];j[N]=x[_e],j[N+1]=x[_e+1],j[N+2]=x[_e+2],j[N+3]=x[_e+3],N+=$}return}for(let Q=0;Q<k;++Q){const _e=3*A[Q];j[N]=x[_e],j[N+1]=x[_e+1],j[N+2]=x[_e+2],j[N+3]=255,N+=$}}else{j[N]=x[0],j[N+1]=x[1],j[N+2]=x[2],j[N+3]=x[3];const Q=new Uint32Array(y.typedBuffer.buffer,y.start),_e=$/4,De=Q[N/=4];N+=_e;const He=k*V;for(let Le=1;Le<He;++Le)Q[N]=De,N+=_e}}function $i(A,x,C,y,N=1){const V=x.typedBuffer,j=x.typedBufferStride;if(y*=j,1===N)for(let $=0;$<C;++$)V[y]=A[0],V[y+1]=A[1],V[y+2]=A[2],V[y+3]=A[3],y+=j;else for(let $=0;$<C;++$)for(let k=0;k<N;++k)V[y]=A[0],V[y+1]=A[1],V[y+2]=A[2],V[y+3]=A[3],y+=j}class Xi{constructor(x){this.vertexBufferLayout=x}allocate(x){return this.vertexBufferLayout.createBuffer(x)}elementCount(x){return x.indices.get(Ke.T.POSITION).length}write(x,C,y,N,V){!function Ji(A,x,C,y,N,V){for(const j of x.fieldNames){const $=A.vertexAttributes.get(j),k=A.indices.get(j);if($&&k)switch(j){case Ke.T.POSITION:{(0,Ge.hu)(3===$.size);const Q=N.getField(j,re.ct);(0,Ge.hu)(!!Q,`No buffer view for ${j}`),Q&&ji(k,$.data,C,Q,V);break}case Ke.T.NORMAL:{(0,Ge.hu)(3===$.size);const Q=N.getField(j,re.ct);(0,Ge.hu)(!!Q,`No buffer view for ${j}`),Q&&zi(k,$.data,y,Q,V);break}case Ke.T.UV0:{(0,Ge.hu)(2===$.size);const Q=N.getField(j,re.Eu);(0,Ge.hu)(!!Q,`No buffer view for ${j}`),Q&&Vi(k,$.data,Q,V);break}case Ke.T.COLOR:case Ke.T.SYMBOLCOLOR:{(0,Ge.hu)(3===$.size||4===$.size);const Q=N.getField(j,re.mc);(0,Ge.hu)(!!Q,`No buffer view for ${j}`),Q&&Gi(k,$.data,$.size,Q,V);break}case Ke.T.TANGENT:{(0,Ge.hu)(4===$.size);const Q=N.getField(j,re.ek);(0,Ge.hu)(!!Q,`No buffer view for ${j}`),Q&&Ki(k,$.data,y,Q,V);break}case Ke.T.PROFILERIGHT:case Ke.T.PROFILEUP:case Ke.T.PROFILEVERTEXANDNORMAL:case Ke.T.FEATUREVALUE:{(0,Ge.hu)(4===$.size);const Q=N.getField(j,re.ek);(0,Ge.hu)(!!Q,`No buffer view for ${j}`),Q&&kr(k,$.data,Q,V)}}else if(j===Ke.T.OBJECTANDLAYERIDCOLOR&&(0,U.pC)(A.objectAndLayerIdColor)){const Q=A.indices.get(Ke.T.POSITION);if((0,Ge.hu)(!!Q,`No buffer view for ${j}`),Q){const _e=Q.length,De=N.getField(j,re.mc);$i(A.objectAndLayerIdColor,De,_e,V)}}}}(y,this.vertexBufferLayout,x,C,N,V)}}var qr=v(7680),lr=v(62666),Tr=v(49549),Yi=v(16568),Zi=v(63855),ei=v(42757),Qi=v(37362),ki=v(61089),qi=v(44505);const es={mask:255},ts={function:{func:we.wb.ALWAYS,ref:Me.hU.OutlineVisualElementMask,mask:Me.hU.OutlineVisualElementMask},operation:{fail:we.xS.KEEP,zFail:we.xS.KEEP,zPass:we.xS.ZERO}},rs={function:{func:we.wb.ALWAYS,ref:Me.hU.OutlineVisualElementMask,mask:Me.hU.OutlineVisualElementMask},operation:{fail:we.xS.KEEP,zFail:we.xS.KEEP,zPass:we.xS.REPLACE}};var xr=v(63984),is=v(29864),Mr=v(22473);class ss extends Yi.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,D.f)(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Me.Vr.Back,this.emissiveFactor=(0,D.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=lr.h.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,D.f)(.2,.2,.2),this.diffuse=(0,D.f)(.8,.8,.8),this.externalColor=(0,At.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,D.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,z.c)(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Me.Gv.Less,this.textureAlphaMode=Me.JJ.Blend,this.textureAlphaCutoff=Zi.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Gr.yD.Occlude}}class fr extends Qi.A{initializeConfiguration(x,C){C.hasWebGL2Context=x.rctx.type===Kr.zO.WEBGL2,C.spherical=x.viewingMode===Sr.JY.Global,C.doublePrecisionRequiresObfuscation=x.rctx.driverTest.doublePrecisionRequiresObfuscation.result,C.textureCoordinateType=C.hasColorTexture||C.hasMetallicRoughnessTexture||C.hasEmissionTexture||C.hasOcclusionTexture||C.hasNormalTexture?Tr.N.Default:Tr.N.None,C.objectAndLayerIdColorInstanced=C.instanced}initializeProgram(x){return this._initializeProgram(x,fr.shader)}_initializeProgram(x,C){return new qi.$(x.rctx,C.get().build(this.configuration),ki.i)}_convertDepthTestFunction(x){return x===Me.Gv.Lequal?we.wb.LEQUAL:we.wb.LESS}_makePipeline(x,C){const y=this.configuration,N=x===xr.A.NONE,V=x===xr.A.FrontFace;return(0,Mr.sm)({blending:y.output!==gt.H.Color&&y.output!==gt.H.Alpha||!y.transparent?null:N?_r.wu:(0,_r.j7)(x),culling:as(y)?(0,Mr.zp)(y.cullFace):null,depthTest:{func:(0,_r.Bh)(x,this._convertDepthTestFunction(y.customDepthTest))},depthWrite:(N||V)&&y.writeDepth?Mr.LZ:null,colorWrite:Mr.BK,stencilWrite:y.hasOccludees?es:null,stencilTest:y.hasOccludees?C?rs:ts:null,polygonOffset:N||V?null:(0,_r.je)(y.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(x,C){return C?this._occludeePipelineState:super.getPipelineState(x,C)}}function as(A){return A.cullFace!==Me.Vr.None||!A.hasSlicePlane&&!A.transparent&&!A.doubleSidedMode}fr.shader=new ei.J(is.D,()=>v.e(7893).then(v.bind(v,77893)));var Fe=v(18100),Be=v(88721),ns=v(30428);class qt extends Be.m{constructor(){super(...arguments),this.hasWebGL2Context=!1}}(0,Fe._)([(0,Be.o)({constValue:!0})],qt.prototype,"hasSliceHighlight",void 0),(0,Fe._)([(0,Be.o)({constValue:!1})],qt.prototype,"hasSliceInVertexProgram",void 0),(0,Fe._)([(0,Be.o)({constValue:!1})],qt.prototype,"instancedDoublePrecision",void 0),(0,Fe._)([(0,Be.o)({constValue:!1})],qt.prototype,"useLegacyTerrainShading",void 0),(0,Fe._)([(0,Be.o)({constValue:!1})],qt.prototype,"hasModelTransformation",void 0),(0,Fe._)([(0,Be.o)({constValue:ns.P.Pass})],qt.prototype,"pbrTextureBindType",void 0),(0,Fe._)([(0,Be.o)()],qt.prototype,"hasWebGL2Context",void 0);class je extends qt{constructor(){super(...arguments),this.output=gt.H.Color,this.alphaDiscardMode=Me.JJ.Opaque,this.doubleSidedMode=ir.q.None,this.pbrMode=hr.f7.Disabled,this.cullFace=Me.Vr.None,this.transparencyPassType=xr.A.NONE,this.normalType=lr.h.Attribute,this.textureCoordinateType=Tr.N.None,this.customDepthTest=Me.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,Fe._)([(0,Be.o)({count:gt.H.COUNT})],je.prototype,"output",void 0),(0,Fe._)([(0,Be.o)({count:Me.JJ.COUNT})],je.prototype,"alphaDiscardMode",void 0),(0,Fe._)([(0,Be.o)({count:ir.q.COUNT})],je.prototype,"doubleSidedMode",void 0),(0,Fe._)([(0,Be.o)({count:hr.f7.COUNT})],je.prototype,"pbrMode",void 0),(0,Fe._)([(0,Be.o)({count:Me.Vr.COUNT})],je.prototype,"cullFace",void 0),(0,Fe._)([(0,Be.o)({count:xr.A.COUNT})],je.prototype,"transparencyPassType",void 0),(0,Fe._)([(0,Be.o)({count:lr.h.COUNT})],je.prototype,"normalType",void 0),(0,Fe._)([(0,Be.o)({count:Tr.N.COUNT})],je.prototype,"textureCoordinateType",void 0),(0,Fe._)([(0,Be.o)({count:Me.Gv.COUNT})],je.prototype,"customDepthTest",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"spherical",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasVertexColors",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasSymbolColors",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasVerticalOffset",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasSlicePlane",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasSliceHighlight",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasColorTexture",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasMetallicRoughnessTexture",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasEmissionTexture",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasOcclusionTexture",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasNormalTexture",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasScreenSizePerspective",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasVertexTangents",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasOccludees",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasMultipassTerrain",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasModelTransformation",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"offsetBackfaces",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"vvSize",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"vvColor",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"receiveShadows",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"receiveAmbientOcclusion",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"textureAlphaPremultiplied",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"instanced",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"instancedColor",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"objectAndLayerIdColorInstanced",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"instancedDoublePrecision",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"writeDepth",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"transparent",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"enableOffset",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"cullAboveGround",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"snowCover",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasColorTextureTransform",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasEmissionTextureTransform",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasNormalTextureTransform",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasOcclusionTextureTransform",void 0),(0,Fe._)([(0,Be.o)()],je.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,Fe._)([(0,Be.o)({constValue:!0})],je.prototype,"hasVvInstancing",void 0),(0,Fe._)([(0,Be.o)({constValue:!1})],je.prototype,"useCustomDTRExponentForWater",void 0),(0,Fe._)([(0,Be.o)({constValue:!1})],je.prototype,"supportsTextureAtlas",void 0),(0,Fe._)([(0,Be.o)({constValue:!0})],je.prototype,"useFillLights",void 0);var os=v(48647);class Er extends fr{initializeConfiguration(x,C){super.initializeConfiguration(x,C),C.hasMetallicRoughnessTexture=!1,C.hasEmissionTexture=!1,C.hasOcclusionTexture=!1,C.hasNormalTexture=!1,C.hasModelTransformation=!1,C.normalType=lr.h.Attribute,C.doubleSidedMode=ir.q.WindingOrder,C.hasVertexTangents=!1}initializeProgram(x){return this._initializeProgram(x,Er.shader)}}Er.shader=new ei.J(os.R,()=>v.e(1369).then(v.bind(v,11369)));class Pr extends Gr.F5{constructor(x){super(x,ds),this.supportsEdges=!0,this._configuration=new je,this._vertexBufferLayout=function us(A){const x=(0,Ri.U$)().vec3f(Ke.T.POSITION).vec3f(Ke.T.NORMAL),C=A.textureId||A.normalTextureId||A.metallicRoughnessTextureId||A.emissiveTextureId||A.occlusionTextureId;return A.hasVertexTangents&&x.vec4f(Ke.T.TANGENT),C&&x.vec2f(Ke.T.UV0),A.hasVertexColors&&x.vec4u8(Ke.T.COLOR),A.hasSymbolColors&&x.vec4u8(Ke.T.SYMBOLCOLOR),(0,Li.Z)("enable-feature:objectAndLayerId-rendering")&&x.vec4u8(Ke.T.OBJECTANDLAYERIDCOLOR),x}(this.parameters)}isVisibleForOutput(x){return x!==gt.H.Shadow&&x!==gt.H.ShadowExcludeHighlight&&x!==gt.H.ShadowHighlight||this.parameters.castShadows}isVisible(){const x=this.parameters;if(!super.isVisible()||0===x.layerOpacity)return!1;const{instanced:C,hasVertexColors:y,hasSymbolColors:N,vvColorEnabled:V}=x,j=(0,U.pC)(C)&&C.includes("color"),$="replace"===x.colorMixMode,k=x.opacity>0,Q=x.externalColor&&x.externalColor[3]>0;return y&&(j||V||N)?!!$||k:y?$?Q:k:j||V||N?!!$||k:$?Q:k}getConfiguration(x,C){return this._configuration.output=x,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=(0,U.pC)(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=(0,U.pC)(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,(0,U.pC)(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Me.Vr.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=C.multipassTerrain.enabled,this._configuration.cullAboveGround=C.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=(0,U.pC)(this.parameters.modelTransformation),x!==gt.H.Color&&x!==gt.H.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this._configuration.doubleSidedMode=this.parameters.treeRendering?ir.q.WindingOrder:this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?ir.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?ir.q.WindingOrder:ir.q.None,this._configuration.instancedColor=(0,U.pC)(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!C.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?hr.f7.Schematic:hr.f7.Normal:hr.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=C.transparencyPassType,this._configuration.enableOffset=C.camera.relativeElevation<_r.ve,this._configuration.snowCover=this.hasSnowCover(C),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(x){return(0,U.pC)(x.weather)&&x.weatherVisible&&"snowy"===x.weather.type&&"enabled"===x.weather.snowCover}intersect(x,C,y,N,V,j){if((0,U.pC)(this.parameters.verticalOffset)){const $=y.camera;(0,M.s)(Rr,C[12],C[13],C[14]);let k=null;switch(y.viewingMode){case Sr.JY.Global:k=(0,M.n)(ti,Rr);break;case Sr.JY.Local:k=(0,M.c)(ti,fs)}let Q=0;const _e=(0,M.b)(ms,Rr,$.eye),De=(0,M.l)(_e),He=(0,M.g)(_e,_e,1/De);let Le=null;this.parameters.screenSizePerspective&&(Le=(0,M.e)(k,He)),Q+=(0,qr.Hx)($,De,this.parameters.verticalOffset,Le??0,this.parameters.screenSizePerspective),(0,M.g)(k,k,Q),(0,M.t)(Lr,k,y.transform.inverseRotation),N=(0,M.b)(hs,N,Lr),V=(0,M.b)(_s,V,Lr)}(0,qr.Bw)(x,y,N,V,function Wi(A){return(0,U.pC)(A)?(Jr.offset=A,Jr):null}(y.verticalOffset),j)}requiresSlot(x,C){return!(C!==gt.H.Color&&C!==gt.H.Alpha&&C!==gt.H.Depth&&C!==gt.H.Normal&&C!==gt.H.Shadow&&C!==gt.H.ShadowHighlight&&C!==gt.H.ShadowExcludeHighlight&&C!==gt.H.Highlight&&C!==gt.H.ObjectAndLayerIdColor||x!==(this.parameters.transparent?this.parameters.writeDepth?nr.TRANSPARENT_MATERIAL:nr.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:nr.OPAQUE_MATERIAL)&&x!==nr.DRAPED_MATERIAL)}createGLMaterial(x){return new ls(x)}createBufferWriter(){return new Xi(this._vertexBufferLayout)}}class ls extends Ii.F{constructor(x){super({...x,...x.material.parameters})}_updateShadowState(x){x.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:x.shadowMap.enabled})}_updateOccludeeState(x){x.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:x.hasOccludees})}beginSlot(x){this._output!==gt.H.Color&&this._output!==gt.H.Alpha||(this._updateShadowState(x),this._updateOccludeeState(x));const C=this._material.parameters;this.updateTexture(C.textureId);const y=x.camera.viewInverseTransposeMatrix;return(0,M.s)(C.origin,y[3],y[7],y[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(C.treeRendering?Er:fr,x)}}const ds=new class cs extends ss{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},hs=(0,D.c)(),_s=(0,D.c)(),fs=(0,D.f)(0,0,1),ti=(0,D.c)(),Lr=(0,D.c)(),Rr=(0,D.c)(),ms=(0,D.c)(),$t=be.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Ir(){return Ir=(0,R.Z)(function*(A,x){const C=yield function gs(A,x){return wr.apply(this,arguments)}(A,x),y=yield function Es(A,x){return Br.apply(this,arguments)}(C.textureDefinitions??{},x);let N=0;for(const V in y)if(y.hasOwnProperty(V)){const j=y[V];N+=j?.image?j.image.width*j.image.height*4:0}return{resource:C,textures:y,size:N+(0,Je.Ul)(C)}}),Ir.apply(this,arguments)}function wr(){return wr=(0,R.Z)(function*(A,x){const C=(0,U.pC)(x)&&x.streamDataRequester;if(C)return function ps(A,x,C){return Ur.apply(this,arguments)}(A,C,x);const y=yield(0,Oe.q6)((0,Pe.default)(A,(0,U.Wg)(x)));if(!0===y.ok)return y.value.data;(0,ye.r9)(y.error),ri(y.error)}),wr.apply(this,arguments)}function Ur(){return Ur=(0,R.Z)(function*(A,x,C){const y=yield(0,Oe.q6)(x.request(A,"json",C));if(!0===y.ok)return y.value;(0,ye.r9)(y.error),ri(y.error.details.url)}),Ur.apply(this,arguments)}function ri(A){throw new qe.Z("",`Request for object resource failed: ${A}`)}function Ts(A){const x=A.params,C=x.topology;let y=!0;switch(x.vertexAttributes||($t.warn("Geometry must specify vertex attributes"),y=!1),x.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const V=x.faces;if(V){if(x.vertexAttributes)for(const j in x.vertexAttributes){const $=V[j];$&&$.values?(null!=$.valueType&&"UInt32"!==$.valueType&&($t.warn(`Unsupported indexed geometry indices type '${$.valueType}', only UInt32 is currently supported`),y=!1),null!=$.valuesPerElement&&1!==$.valuesPerElement&&($t.warn(`Unsupported indexed geometry values per element '${$.valuesPerElement}', only 1 is currently supported`),y=!1)):($t.warn(`Indexed geometry does not specify face indices for '${j}' attribute`),y=!1)}}else $t.warn("Indexed geometries must specify faces"),y=!1;break}default:$t.warn(`Unsupported topology '${C}'`),y=!1}A.params.material||($t.warn("Geometry requires material"),y=!1);const N=A.params.vertexAttributes;for(const V in N)N[V].values||($t.warn("Geometries with externally defined attributes are not yet supported"),y=!1);return y}function Ms(A){const x=(0,W.cS)();return A.forEach(C=>{const y=C.boundingInfo;(0,U.pC)(y)&&((0,W.pp)(x,y.bbMin),(0,W.pp)(x,y.bbMax))}),x}function Br(){return Br=(0,R.Z)(function*(A,x){const C=[];for(const V in A){const j=A[V],$=j.images[0].data;if(!$){$t.warn("Externally referenced texture data is not yet supported");continue}const k=j.encoding+";base64,"+$,Q="/textureDefinitions/"+V,_e="rgba"===j.channels?j.alphaChannelUsage||"transparency":"none",De={noUnpackFlip:!0,wrap:{s:we.e8.REPEAT,t:we.e8.REPEAT},preMultiplyAlpha:ii(_e)!==Me.JJ.Opaque},He=(0,U.pC)(x)&&x.disableTextures?Promise.resolve(null):(0,at.t)(k,x);C.push(He.then(Le=>({refId:Q,image:Le,params:De,alphaChannelUsage:_e})))}const y=yield Promise.all(C),N={};for(const V of y)N[V.refId]=V;return N}),Br.apply(this,arguments)}function ii(A){switch(A){case"mask":return Me.JJ.Mask;case"maskAndTransparency":return Me.JJ.MaskBlend;case"none":return Me.JJ.Opaque;default:return Me.JJ.Blend}}function Ps(A){const x=A.params;return{id:1,material:x.material,texture:x.texture,region:x.texture}}const Os=new Ve.G(1,2,"wosr");var cr=v(5205),As=v(88948),si=v(57986),Cs=v(93916);function Ds(A,x){return Nr.apply(this,arguments)}function Nr(){return Nr=(0,R.Z)(function*(A,x){const C=ai((0,S.pJ)(A));if("wosr"===C.fileType){const De=yield x.cache?x.cache.loadWOSR(C.url,x):function vs(A,x){return Ir.apply(this,arguments)}(C.url,x),{engineResources:He,referenceBoundingBox:Le}=function xs(A,x){const C=new Array,y=new Array,N=new Array,V=new ge.r,j=A.resource,$=Ve.G.parse(j.version||"1.0","wosr");Os.validate($);const k=j.model.name,Q=j.model.geometries,_e=j.materialDefinitions??{},De=A.textures;let He=0;const Le=new Map;for(let Ne=0;Ne<Q.length;Ne++){const ze=Q[Ne];if(!Ts(ze))continue;const $e=Ps(ze),Ze=ze.params.vertexAttributes,ct=[];for(const Qe in Ze){const st=Ze[Qe];ct.push([Qe,new Ye.a(st.values,st.valuesPerElement,!0)])}const ht=[];if("PerAttributeArray"!==ze.params.topology){const Qe=ze.params.faces;for(const st in Qe)ht.push([st,Qe[st].values])}const lt=$e.texture,_t=De&&De[lt];if(_t&&!Le.has(lt)){const{image:Qe,params:st}=_t,pt=new ar(Qe,st);y.push(pt),Le.set(lt,pt)}const ot=Le.get(lt),rt=ot?ot.id:void 0,tt=$e.material;let it=V.get(tt,lt);if((0,U.Wi)(it)){const Qe=_e[tt.substring(tt.lastIndexOf("/")+1)].params;1===Qe.transparency&&(Qe.transparency=0);const st=_t&&_t.alphaChannelUsage,pt=Qe.transparency>0||"transparency"===st||"maskAndTransparency"===st,Ht=_t?ii(_t.alphaChannelUsage):void 0,yt={ambient:(0,D.d)(Qe.diffuse),diffuse:(0,D.d)(Qe.diffuse),opacity:1-(Qe.transparency||0),transparent:pt,textureAlphaMode:Ht,textureAlphaCutoff:.33,textureId:rt,initTextureTransparent:!0,doubleSided:!0,cullFace:Me.Vr.None,colorMixMode:Qe.externalColorMixMode||"tint",textureAlphaPremultiplied:!!_t&&!!_t.params.preMultiplyAlpha};(0,U.pC)(x)&&x.materialParamsMixin&&Object.assign(yt,x.materialParamsMixin),it=new Pr(yt),V.set(tt,lt,it)}N.push(it);const ke=new Pt(it,ct,ht);He+=ht.position?ht.position.length:0,C.push(ke)}return{engineResources:[{name:k,stageResources:{textures:y,materials:N,geometries:C},pivotOffset:j.model.pivotOffset,numberOfVertices:He,lodThreshold:null}],referenceBoundingBox:Ms(C)}}(De,x);return{lods:He,referenceBoundingBox:Le,isEsriSymbolResource:!1,isWosr:!0}}const y=yield x.cache?x.cache.loadGLTF(C.url,x,!!x.usePBR):(0,ne.Q)(new he.C(x.streamDataRequester),C.url,x,x.usePBR),N=(0,U.U2)(y.model.meta,"ESRI_proxyEllipsoid"),V=y.meta.isEsriSymbolResource&&(0,U.pC)(N)&&y.meta.uri.includes("/RealisticTrees/");V&&!y.customMeta.esriTreeRendering&&(y.customMeta.esriTreeRendering=!0,function Rs(A,x){for(let C=0;C<A.model.lods.length;++C){const y=A.model.lods[C];for(const N of y.parts){const V=N.attributes.normal;if((0,U.Wi)(V))return;const j=N.attributes.position,$=j.count,k=(0,D.c)(),Q=(0,D.c)(),_e=(0,D.c)(),De=(0,ae.gS)(re.mc,$),He=(0,ae.gS)(re.ct,$),Le=(0,I.a)((0,L.c)(),N.transform);for(let Ne=0;Ne<$;Ne++){j.getVec(Ne,Q),V.getVec(Ne,k),(0,M.m)(Q,Q,N.transform),(0,M.b)(_e,Q,x.center),(0,M.C)(_e,_e,x.radius);const ze=_e[2],$e=(0,M.l)(_e),Ze=Math.min(.45+.55*$e*$e,1);(0,M.C)(_e,_e,x.radius),null!==Le&&(0,M.m)(_e,_e,Le),(0,M.n)(_e,_e),C+1!==A.model.lods.length&&A.model.lods.length>1&&(0,M.h)(_e,_e,k,ze>-1?.2:Math.min(-4*ze-3.8,1)),He.setVec(Ne,_e),De.set(Ne,0,255*Ze),De.set(Ne,1,255*Ze),De.set(Ne,2,255*Ze),De.set(Ne,3,255)}N.attributes.normal=He,N.attributes.color=De}}}(y,N));const j=!!x.usePBR,$=y.meta.isEsriSymbolResource?{usePBR:j,isSchematic:!1,treeRendering:V,mrrFactors:[0,1,.2]}:{usePBR:j,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},k={...x.materialParamsMixin,treeRendering:V},{engineResources:Q,referenceBoundingBox:_e}=ni(y,$,k,x.skipHighLods&&null==C.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:C.specifiedLodIndex});return{lods:Q,referenceBoundingBox:_e,isEsriSymbolResource:y.meta.isEsriSymbolResource,isWosr:!1}}),Nr.apply(this,arguments)}function ai(A){const x=A.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return x?{fileType:"gltf",url:x[1],specifiedLodIndex:null!=x[4]?Number(x[4]):null}:A.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:A,specifiedLodIndex:null}:{fileType:"unknown",url:A,specifiedLodIndex:null}}function ni(A,x,C,y){const N=A.model,V=new Array,j=new Map,$=new Map,k=N.lods.length,Q=(0,W.cS)();return N.lods.forEach((_e,De)=>{const He=!0===y.skipHighLods&&(k>1&&0===De||k>3&&1===De)||!1===y.skipHighLods&&null!=y.singleLodIndex&&De!==y.singleLodIndex;if(He&&0!==De)return;const Le=new Ae(_e.name,_e.lodThreshold,[0,0,0]);_e.parts.forEach(Ne=>{const ze=He?new Pr({}):function bs(A,x,C,y,N,V,j){const $=x.material+(x.attributes.normal?"_normal":"")+(x.attributes.color?"_color":"")+(x.attributes.texCoord0?"_texCoord0":"")+(x.attributes.tangent?"_tangent":""),k=A.materials.get(x.material),Q=(0,U.pC)(x.attributes.texCoord0),_e=(0,U.pC)(x.attributes.normal);if((0,U.Wi)(k))return null;const De=function Ss(A){switch(A){case"BLEND":return Me.JJ.Blend;case"MASK":return Me.JJ.Mask;case"OPAQUE":case null:case void 0:return Me.JJ.Opaque}}(k.alphaMode);if(!V.has($)){if(Q){const lt=(_t,ot=!1)=>{if((0,U.pC)(_t)&&!j.has(_t)){const rt=A.textures.get(_t);if((0,U.pC)(rt)){const tt=rt.data;j.set(_t,new ar((0,ee.$A)(tt)?tt.data:tt,{...rt.parameters,preMultiplyAlpha:!(0,ee.$A)(tt)&&ot,encoding:(0,ee.$A)(tt)&&(0,U.pC)(tt.encoding)?tt.encoding:void 0}))}}};lt(k.textureColor,De!==Me.JJ.Opaque),lt(k.textureNormal),lt(k.textureOcclusion),lt(k.textureEmissive),lt(k.textureMetallicRoughness)}const Le=k.color[0]**(1/cr.K),Ne=k.color[1]**(1/cr.K),ze=k.color[2]**(1/cr.K),$e=k.emissiveFactor[0]**(1/cr.K),Ze=k.emissiveFactor[1]**(1/cr.K),ct=k.emissiveFactor[2]**(1/cr.K),ht=(0,U.pC)(k.textureColor)&&Q?j.get(k.textureColor):null;V.set($,new Pr({...y,transparent:De===Me.JJ.Blend,customDepthTest:Me.Gv.Lequal,textureAlphaMode:De,textureAlphaCutoff:k.alphaCutoff,diffuse:[Le,Ne,ze],ambient:[Le,Ne,ze],opacity:k.opacity,doubleSided:k.doubleSided,doubleSidedType:"winding-order",cullFace:k.doubleSided?Me.Vr.None:Me.Vr.Back,hasVertexColors:!!x.attributes.color,hasVertexTangents:!!x.attributes.tangent,normalType:_e?lr.h.Attribute:lr.h.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:(0,U.pC)(ht)?ht.id:void 0,colorMixMode:k.colorMixMode,normalTextureId:(0,U.pC)(k.textureNormal)&&Q?j.get(k.textureNormal).id:void 0,textureAlphaPremultiplied:(0,U.pC)(ht)&&!!ht.params.preMultiplyAlpha,occlusionTextureId:(0,U.pC)(k.textureOcclusion)&&Q?j.get(k.textureOcclusion).id:void 0,emissiveTextureId:(0,U.pC)(k.textureEmissive)&&Q?j.get(k.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,U.pC)(k.textureMetallicRoughness)&&Q?j.get(k.textureMetallicRoughness).id:void 0,emissiveFactor:[$e,Ze,ct],mrrFactors:[k.metallicFactor,k.roughnessFactor,y.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:xe(k.colorTextureTransform),normalTextureTransformMatrix:xe(k.normalTextureTransform),occlusionTextureTransformMatrix:xe(k.occlusionTextureTransform),emissiveTextureTransformMatrix:xe(k.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:xe(k.metallicRoughnessTextureTransform),...N}))}const He=V.get($);if(C.stageResources.materials.push(He),Q){const Le=Ne=>{(0,U.pC)(Ne)&&C.stageResources.textures.push(j.get(Ne))};Le(k.textureColor),Le(k.textureNormal),Le(k.textureOcclusion),Le(k.textureEmissive),Le(k.textureMetallicRoughness)}return He}(N,Ne,Le,x,C,j,$),{geometry:$e,vertexCount:Ze}=function ys(A,x){const C=A.attributes.position.count,y=function Ls(A,x){switch(x){case we.MX.TRIANGLES:return(0,K.nh)(A);case we.MX.TRIANGLE_STRIP:return(0,K.DA)(A);case we.MX.TRIANGLE_FAN:return(0,K.jX)(A)}}(A.indices||C,A.primitiveType),N=(0,ae.gS)(re.ct,C);(0,se.t)(N,A.attributes.position,A.transform);const V=[[Ke.T.POSITION,new Ye.a(N.typedBuffer,N.elementCount,!0)]],j=[[Ke.T.POSITION,y]];if((0,U.pC)(A.attributes.normal)){const $=(0,ae.gS)(re.ct,C);(0,H.b)(Or,A.transform),(0,se.a)($,A.attributes.normal,Or),V.push([Ke.T.NORMAL,new Ye.a($.typedBuffer,$.elementCount,!0)]),j.push([Ke.T.NORMAL,y])}if((0,U.pC)(A.attributes.tangent)){const $=(0,ae.gS)(re.ek,C);(0,H.b)(Or,A.transform),(0,Y.t)($,A.attributes.tangent,Or),V.push([Ke.T.TANGENT,new Ye.a($.typedBuffer,$.elementCount,!0)]),j.push([Ke.T.TANGENT,y])}if((0,U.pC)(A.attributes.texCoord0)){const $=(0,ae.gS)(re.Eu,C);(0,As.n)($,A.attributes.texCoord0),V.push([Ke.T.UV0,new Ye.a($.typedBuffer,$.elementCount,!0)]),j.push([Ke.T.UV0,y])}if((0,U.pC)(A.attributes.color)){const $=(0,ae.gS)(re.mc,C);if(4===A.attributes.color.elementCount)A.attributes.color instanceof re.ek?(0,Y.s)($,A.attributes.color,255):A.attributes.color instanceof re.mc?(0,si.c)($,A.attributes.color):A.attributes.color instanceof re.v6&&(0,Y.s)($,A.attributes.color,1/256);else{(0,si.f)($,255,255,255,255);const k=new re.ne($.buffer,0,4);A.attributes.color instanceof re.ct?(0,se.s)(k,A.attributes.color,255):A.attributes.color instanceof re.ne?(0,Cs.c)(k,A.attributes.color):A.attributes.color instanceof re.mw&&(0,se.s)(k,A.attributes.color,1/256)}V.push([Ke.T.COLOR,new Ye.a($.typedBuffer,$.elementCount,!0)]),j.push([Ke.T.COLOR,y])}return{geometry:new Pt(x,V,j),vertexCount:C}}(Ne,(0,U.pC)(ze)?ze:new Pr({})),ct=$e.boundingInfo;(0,U.pC)(ct)&&0===De&&((0,W.pp)(Q,ct.bbMin),(0,W.pp)(Q,ct.bbMax)),(0,U.pC)(ze)&&(Le.stageResources.geometries.push($e),Le.numberOfVertices+=Ze)}),He||V.push(Le)}),{engineResources:V,referenceBoundingBox:Q}}const Or=(0,z.c)()},61090:(Te,ie,v)=>{var S,D;v.d(ie,{a9:()=>S}),v(93142),(D=S||(S={}))[D.Multiply=1]="Multiply",D[D.Ignore=2]="Ignore",D[D.Replace=3]="Replace",D[D.Tint=4]="Tint"},61462:(Te,ie,v)=>{v.d(ie,{U$:()=>z});var R=v(9565),S=v(78161);class U{constructor(L,M){this.layout=L,this.buffer="number"==typeof M?new ArrayBuffer(M*L.stride):M;for(const D of L.fieldNames){const W=L.fields.get(D);this[D]=new W.constructor(this.buffer,W.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(L,M){const D=this[L];return D&&D.elementCount===M.ElementCount&&D.elementType===M.ElementType?D:null}slice(L,M){return new U(this.layout,this.buffer.slice(L*this.stride,M*this.stride))}copyFrom(L,M,D,W){const re=this.stride;if(re%4==0){const se=new Uint32Array(L.buffer,M*re,W*re/4);new Uint32Array(this.buffer,D*re,W*re/4).set(se)}else{const se=new Uint8Array(L.buffer,M*re,W*re);new Uint8Array(this.buffer,D*re,W*re).set(se)}}}class H{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(L,M){return this._appendField(L,R.Eu,M),this}vec2f64(L,M){return this._appendField(L,R.q6,M),this}vec3f(L,M){return this._appendField(L,R.ct,M),this}vec3f64(L,M){return this._appendField(L,R.fP,M),this}vec4f(L,M){return this._appendField(L,R.ek,M),this}vec4f64(L,M){return this._appendField(L,R.Cd,M),this}mat3f(L,M){return this._appendField(L,R.gK,M),this}mat3f64(L,M){return this._appendField(L,R.ey,M),this}mat4f(L,M){return this._appendField(L,R.bj,M),this}mat4f64(L,M){return this._appendField(L,R.O1,M),this}vec4u8(L,M){return this._appendField(L,R.mc,M),this}f32(L,M){return this._appendField(L,R.ly,M),this}f64(L,M){return this._appendField(L,R.oS,M),this}u8(L,M){return this._appendField(L,R.D_,M),this}u16(L,M){return this._appendField(L,R.av,M),this}i8(L,M){return this._appendField(L,R.Hz,M),this}vec2i8(L,M){return this._appendField(L,R.Vs,M),this}vec2i16(L,M){return this._appendField(L,R.or,M),this}vec2u8(L,M){return this._appendField(L,R.xA,M),this}vec4u16(L,M){return this._appendField(L,R.v6,M),this}u32(L,M){return this._appendField(L,R.Nu,M),this}_appendField(L,M,D){const W=M.ElementCount*(0,S.n1)(M.ElementType);this.fields.set(L,{size:W,constructor:M,offset:this.stride,optional:D}),this.stride+=W,this.fieldNames.push(L)}alignTo(L){return this.stride=Math.floor((this.stride+L-1)/L)*L,this}hasField(L){return this.fieldNames.includes(L)}createBuffer(L){return new U(this,L)}createView(L){return new U(this,L)}clone(){const L=new H;return L.stride=this.stride,L.fields=new Map,this.fields.forEach((M,D)=>L.fields.set(D,M)),L.fieldNames=this.fieldNames.slice(),L.BufferType=this.BufferType,L}}function z(){return new H}},74891:(Te,ie,v)=>{v.d(ie,{Zu:()=>I,bA:()=>L,qj:()=>M});var R=v(26573),S=v(51945),U=v(71882),H=v(99106);function z(D){D.varyings.add("linearDepth","float")}function I(D){D.vertex.uniforms.add(new U.A("nearFar",(W,re)=>re.camera.nearFar))}function L(D){D.vertex.code.add(H.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function M(D,W){const{vertex:re}=D;switch(W.output){case R.H.Color:if(W.receiveShadows)return z(D),void re.code.add(H.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case R.H.Depth:case R.H.Shadow:case R.H.ShadowHighlight:case R.H.ShadowExcludeHighlight:return D.include(S.up,W),z(D),I(D),L(D),void re.code.add(H.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}re.code.add(H.H`void forwardLinearDepth() {}`)}},88026:(Te,ie,v)=>{v.d(ie,{w:()=>S});var R=v(99106);function S(U){U.vertex.code.add(R.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},93249:(Te,ie,v)=>{v.d(ie,{k:()=>U});var R=v(99106),S=v(51663);function U(H,z=!0){H.attributes.add(S.T.POSITION,"vec2"),z&&H.varyings.add("uv","vec2"),H.vertex.code.add(R.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${z?R.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},26573:(Te,ie,v)=>{var R,S;v.d(ie,{H:()=>R}),(S=R||(R={}))[S.Color=0]="Color",S[S.Depth=1]="Depth",S[S.Normal=2]="Normal",S[S.Shadow=3]="Shadow",S[S.ShadowHighlight=4]="ShadowHighlight",S[S.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",S[S.Highlight=6]="Highlight",S[S.Alpha=7]="Alpha",S[S.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",S[S.COUNT=9]="COUNT"},56877:(Te,ie,v)=>{v.d(ie,{f5:()=>re});var R=v(53661),S=v(64544),U=v(23160),H=v(92950),z=v(77765),I=v(89501),M=(v(26615),v(99106));function re(ve,Ae){!function se(ve,Ae,Pe){if(!Ae.hasSlicePlane){const be=M.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return Ae.hasSliceInVertexProgram&&ve.vertex.code.add(be),void ve.fragment.code.add(be)}ve.extensions.add("GL_OES_standard_derivatives"),Ae.hasSliceInVertexProgram&&ve.vertex.uniforms.add(Pe),ve.fragment.uniforms.add(Pe);const Oe=M.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,Je=M.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,qe=Ae.hasSliceHighlight?M.H`
        ${Je}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:M.H`#define highlightSlice(_color_, _pos_) (_color_)`;Ae.hasSliceInVertexProgram&&ve.vertex.code.add(Oe),ve.fragment.code.add(Oe),ve.fragment.code.add(qe)}(ve,Ae,[new I.B("slicePlaneOrigin",(Pe,Oe)=>function ne(ve,Ae,Pe){if((0,R.Wi)(Pe.slicePlane))return z.Z;const Oe=Y(ve,Ae,Pe),Je=ae(Oe,Pe.slicePlane),qe=he(ve,Oe,Pe);return(0,R.pC)(qe)?(0,H.m)(J,Je,qe):Je}(Ae,Pe,Oe)),new I.B("slicePlaneBasis1",(Pe,Oe)=>K(Ae,Pe,Oe,(0,R.Wg)(Oe.slicePlane)?.basis1)),new I.B("slicePlaneBasis2",(Pe,Oe)=>K(Ae,Pe,Oe,(0,R.Wg)(Oe.slicePlane)?.basis2))])}function Y(ve,Ae,Pe){return ve.instancedDoublePrecision?(0,H.s)(ee,Pe.camera.viewInverseTransposeMatrix[3],Pe.camera.viewInverseTransposeMatrix[7],Pe.camera.viewInverseTransposeMatrix[11]):Ae.slicePlaneLocalOrigin}function ae(ve,Ae){return(0,R.pC)(ve)?(0,H.b)(J,Ae.origin,ve):Ae.origin}function he(ve,Ae,Pe){return ve.hasSliceTranslatedView?(0,R.pC)(Ae)?(0,S.w)(xe,Pe.camera.viewMatrix,Ae):Pe.camera.viewMatrix:null}function K(ve,Ae,Pe,Oe){if((0,R.Wi)(Oe)||(0,R.Wi)(Pe.slicePlane))return z.Z;const Je=Y(ve,Ae,Pe),qe=ae(Je,Pe.slicePlane),be=he(ve,Je,Pe);return(0,R.pC)(be)?((0,H.a)(de,Oe,qe),(0,H.m)(J,qe,be),(0,H.m)(de,de,be),(0,H.b)(de,de,J)):Oe}const ee=(0,z.c)(),J=(0,z.c)(),de=(0,z.c)(),xe=(0,U.c)()},2847:(Te,ie,v)=>{v.d(ie,{w:()=>U});var R=v(74891),S=v(99106);function U(H,z){if((0,R.bA)(H),z.hasModelTransformation)return H.vertex.code.add(S.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void H.vertex.code.add(S.H`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);H.vertex.code.add(S.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),H.vertex.code.add(S.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},66948:(Te,ie,v)=>{v.d(ie,{f:()=>Y});var R=v(18100),S=v(92950),U=v(77765),H=v(26573),z=v(10168),I=v(89877),L=v(89501),M=v(99106),D=v(88721),W=v(51663),re=v(58013);function Y(he,ne){ne.instanced&&ne.instancedDoublePrecision&&(he.attributes.add(W.T.MODELORIGINHI,"vec3"),he.attributes.add(W.T.MODELORIGINLO,"vec3"),he.attributes.add(W.T.MODEL,"mat3"),he.attributes.add(W.T.MODELNORMAL,"mat3"));const K=he.vertex;ne.instancedDoublePrecision&&(K.include(z.$,ne),K.uniforms.add(new L.B("viewOriginHi",(ee,J)=>(0,re.U8)((0,S.s)(ae,J.camera.viewInverseTransposeMatrix[3],J.camera.viewInverseTransposeMatrix[7],J.camera.viewInverseTransposeMatrix[11]),ae))),K.uniforms.add(new L.B("viewOriginLo",(ee,J)=>(0,re.GB)((0,S.s)(ae,J.camera.viewInverseTransposeMatrix[3],J.camera.viewInverseTransposeMatrix[7],J.camera.viewInverseTransposeMatrix[11]),ae)))),K.code.add(M.H`
    vec3 calculateVPos() {
      ${ne.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),K.code.add(M.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${ne.instancedDoublePrecision?M.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),K.code.add(M.H`
    vec3 dpNormal(vec4 _normal) {
      ${ne.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),ne.output===H.H.Normal&&((0,I._8)(K),K.code.add(M.H`
    vec3 dpNormalView(vec4 _normal) {
      ${ne.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),ne.hasVertexTangents&&K.code.add(M.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${ne.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}(0,R._)([(0,D.o)()],class se extends D.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}.prototype,"instancedDoublePrecision",void 0);const ae=(0,U.c)()},62666:(Te,ie,v)=>{v.d(ie,{O:()=>z,h:()=>I});var R=v(31385),S=v(99106);function U(L){const M=S.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;L.vertex.code.add(M)}var I,L,H=v(51663);function z(L,M){switch(M.normalType){case I.CompressedAttribute:L.include(U),L.attributes.add(H.T.NORMALCOMPRESSED,"vec2"),L.vertex.code.add(S.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`);break;case I.Attribute:L.attributes.add(H.T.NORMAL,"vec3"),L.vertex.code.add(S.H`vec3 normalModel() {
return normal;
}`);break;case I.ScreenDerivative:L.extensions.add("GL_OES_standard_derivatives"),L.fragment.code.add(S.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,R.Bg)(M.normalType);case I.COUNT:case I.Ground:}}(L=I||(I={}))[L.Attribute=0]="Attribute",L[L.CompressedAttribute=1]="CompressedAttribute",L[L.Ground=2]="Ground",L[L.ScreenDerivative=3]="ScreenDerivative",L[L.COUNT=4]="COUNT"},13321:(Te,ie,v)=>{v.d(ie,{f:()=>U});var R=v(99106),S=v(51663);function U(H){H.attributes.add(S.T.POSITION,"vec3"),H.vertex.code.add(R.H`vec3 positionModel() { return position; }`)}},3943:(Te,ie,v)=>{v.d(ie,{R:()=>L});var R=v(61090),S=v(99106);function U(M){M.vertex.code.add(S.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${S.H.int(R.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${S.H.int(R.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${S.H.int(R.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${S.H.int(R.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var H=v(29402),z=v(51663),I=v(7680);function L(M,D){D.hasSymbolColors?(M.include(U),M.attributes.add(z.T.SYMBOLCOLOR,"vec4"),M.varyings.add("colorMixMode","mediump float"),M.vertex.code.add(S.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(M.fragment.uniforms.add(new H._("colorMixMode",W=>I.FZ[W.colorMixMode])),M.vertex.code.add(S.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},49549:(Te,ie,v)=>{v.d(ie,{D:()=>z,N:()=>H});var H,I,R=v(31385),S=v(99106),U=v(51663);function z(I,L){switch(L.textureCoordinateType){case H.Default:return I.attributes.add(U.T.UV0,"vec2"),I.varyings.add("vuv0","vec2"),void I.vertex.code.add(S.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case H.Compressed:return I.attributes.add(U.T.UV0,"vec2"),I.varyings.add("vuv0","vec2"),void I.vertex.code.add(S.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case H.Atlas:return I.attributes.add(U.T.UV0,"vec2"),I.varyings.add("vuv0","vec2"),I.attributes.add(U.T.UVREGION,"vec4"),I.varyings.add("vuvRegion","vec4"),void I.vertex.code.add(S.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,R.Bg)(L.textureCoordinateType);case H.None:return void I.vertex.code.add(S.H`void forwardTextureCoordinates() {}`);case H.COUNT:return}}(I=H||(H={}))[I.None=0]="None",I[I.Default=1]="Default",I[I.Atlas=2]="Atlas",I[I.Compressed=3]="Compressed",I[I.COUNT=4]="COUNT"},83817:(Te,ie,v)=>{v.d(ie,{c:()=>U});var R=v(99106),S=v(51663);function U(H,z){z.hasVertexColors?(H.attributes.add(S.T.COLOR,"vec4"),H.varyings.add("vColor","vec4"),H.vertex.code.add(R.H`void forwardVertexColor() { vColor = color; }`),H.vertex.code.add(R.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):H.vertex.code.add(R.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},16568:(Te,ie,v)=>{v.d(ie,{Bb:()=>D,d4:()=>W});var R=v(31385),S=v(53251),H=(v(91746),v(62666)),z=v(51945),I=v(99106),L=v(49293),M=v(43790);function D(se,Y){switch(Y.normalType){case H.h.Attribute:case H.h.CompressedAttribute:se.include(H.O,Y),se.varyings.add("vNormalWorld","vec3"),se.varyings.add("vNormalView","vec3"),se.vertex.uniforms.add([new L.j("transformNormalGlobalFromModel",ae=>ae.transformNormalGlobalFromModel),new M.c("transformNormalViewFromGlobal",ae=>ae.transformNormalViewFromGlobal)]),se.vertex.code.add(I.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case H.h.Ground:se.include(z.up,Y),se.varyings.add("vNormalWorld","vec3"),se.vertex.code.add(I.H`
        void forwardNormal() {
          vNormalWorld = ${Y.spherical?I.H`normalize(vPositionWorldCameraRelative);`:I.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case H.h.ScreenDerivative:se.vertex.code.add(I.H`void forwardNormal() {}`);break;default:(0,R.Bg)(Y.normalType);case H.h.COUNT:}}class W extends z.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,S.c)()}}},51945:(Te,ie,v)=>{v.d(ie,{su:()=>ae,up:()=>Y});var R=v(53251),S=v(23160),H=(v(49533),v(77765)),z=v(13321),I=v(10168),L=v(89501),M=v(26615),D=v(99106),W=v(49293),re=v(43790),se=v(63924);function Y(ne,K){ne.include(z.f);const ee=ne.vertex;ee.include(I.$,K),ne.varyings.add("vPositionWorldCameraRelative","vec3"),ne.varyings.add("vPosition_view","vec3"),ee.uniforms.add([new M.J("transformWorldFromViewTH",J=>J.transformWorldFromViewTH),new M.J("transformWorldFromViewTL",J=>J.transformWorldFromViewTL),new re.c("transformViewFromCameraRelativeRS",J=>J.transformViewFromCameraRelativeRS),new se.g("transformProjFromView",J=>J.transformProjFromView),new W.j("transformWorldFromModelRS",J=>J.transformWorldFromModelRS),new L.B("transformWorldFromModelTH",J=>J.transformWorldFromModelTH),new L.B("transformWorldFromModelTL",J=>J.transformWorldFromModelTL)]),ee.code.add(D.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),ee.code.add(D.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${K.spherical?D.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:D.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),ne.fragment.uniforms.add(new M.J("transformWorldFromViewTL",J=>J.transformWorldFromViewTL)),ee.code.add(D.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),ne.fragment.code.add(D.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class ae extends D.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,H.c)(),this.transformWorldFromViewTL=(0,H.c)(),this.transformViewFromCameraRelativeRS=(0,R.c)(),this.transformProjFromView=(0,S.c)()}}},20333:(Te,ie,v)=>{v.d(ie,{i:()=>z});var R=v(31385),S=v(49549),U=v(99106);function H(I){I.extensions.add("GL_EXT_shader_texture_lod"),I.extensions.add("GL_OES_standard_derivatives"),I.fragment.code.add(U.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function z(I,L){switch(I.include(S.D,L),I.fragment.code.add(U.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${L.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),L.textureCoordinateType){case S.N.Default:case S.N.Compressed:return void I.fragment.code.add(U.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case S.N.Atlas:return I.include(H),void I.fragment.code.add(U.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:(0,R.Bg)(L.textureCoordinateType);case S.N.None:case S.N.COUNT:return}}},27256:(Te,ie,v)=>{v.d(ie,{L:()=>re});var R=v(71943),S=v(91746),U=v(4058),H=v(99106);function z(ae){ae.vertex.code.add(H.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),ae.vertex.code.add(H.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),ae.vertex.code.add(H.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),ae.vertex.code.add(H.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),ae.vertex.code.add(H.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),ae.vertex.code.add(H.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),ae.vertex.code.add(H.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const D=(0,S.c)();var W=v(89877);function re(ae,he){const ne=ae.vertex;he.hasVerticalOffset?(function Y(ae){ae.uniforms.add(new U.N("verticalOffset",(he,ne)=>{const{minWorldLength:K,maxWorldLength:ee,screenLength:J}=he.verticalOffset,de=Math.tan(.5*ne.camera.fovY)/(.5*ne.camera.fullViewport[3]);return(0,R.s)(se,J*(ne.camera.pixelRatio||1),de,K,ee)}))}(ne),he.hasScreenSizePerspective&&(ae.include(z),function L(ae){ae.uniforms.add(new U.N("screenSizePerspectiveAlignment",he=>function M(ae){return(0,R.s)(D,ae.parameters.divisor,ae.parameters.offset,ae.parameters.minPixelSize,ae.paddingPixelsOverride)}(he.screenSizePerspectiveAlignment||he.screenSizePerspective)))}(ne),(0,W.hY)(ae.vertex,he)),ne.code.add(H.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${he.spherical?H.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:H.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${he.hasScreenSizePerspective?H.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:H.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):ne.code.add(H.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const se=(0,S.c)()},87443:(Te,ie,v)=>{v.d(ie,{s:()=>qe});var R=v(53661),S=v(23160),U=v(74891),H=v(26573),z=v(56877),I=v(2847),L=v(62666),M=v(99106),D=v(51663);function W(be,ge){const ye=ge.output===H.H.ObjectAndLayerIdColor,Ve=ge.objectAndLayerIdColorInstanced;ye&&(be.varyings.add("objectAndLayerIdColorVarying","vec4"),be.attributes.add(Ve?D.T.OBJECTANDLAYERIDCOLOR_INSTANCED:D.T.OBJECTANDLAYERIDCOLOR,"vec4")),be.vertex.code.add(M.H`
     void forwardObjectAndLayerIdColor() {
      ${ye?Ve?M.H`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:M.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:M.H``} }`),be.fragment.code.add(M.H`
      void outputObjectAndLayerIdColor() {
        ${ye?M.H`gl_FragColor = objectAndLayerIdColorVarying;`:M.H``} }`)}var re=v(49549),se=v(16568),Y=v(12032);function ae(be,ge){switch(be.fragment.include(Y.n),ge.output){case H.H.Shadow:case H.H.ShadowHighlight:case H.H.ShadowExcludeHighlight:be.extensions.add("GL_OES_standard_derivatives"),be.fragment.code.add(M.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case H.H.Depth:be.fragment.code.add(M.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}var he=v(91746),ne=v(77656),K=v(94391),ee=v(67852);const J=(0,he.f)(1,1,0,1),de=(0,he.f)(1,0,1,1);function xe(be,ge){be.fragment.uniforms.add((0,K.J)("depthTex",(ye,Ve)=>Ve.highlightDepthTexture,ge.hasWebGL2Context?ee.D.None:ee.D.InvSize)),be.fragment.constants.add("occludedHighlightFlag","vec4",J).add("unoccludedHighlightFlag","vec4",de),be.fragment.code.add(M.H`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${(0,ne.b6)(ge,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}var ve=v(56681),Ae=v(28958),Pe=v(89877),Oe=v(63924),Je=v(2754);function qe(be,ge){const{vertex:ye,fragment:Ve}=be,at=ge.hasModelTransformation;at&&ye.uniforms.add(new Oe.g("model",Me=>(0,R.pC)(Me.modelTransformation)?Me.modelTransformation:S.I));const Ye=ge.hasColorTexture&&ge.alphaDiscardMode!==Je.JJ.Opaque;switch(ge.output){case H.H.Depth:case H.H.Shadow:case H.H.ShadowHighlight:case H.H.ShadowExcludeHighlight:case H.H.ObjectAndLayerIdColor:(0,Pe.Sv)(ye,ge),be.include(I.w,ge),be.include(re.D,ge),be.include(ve.k,ge),be.include(ae,ge),be.include(z.f5,ge),be.include(W,ge),(0,U.Zu)(be),be.varyings.add("depth","float"),Ye&&Ve.uniforms.add(new K.A("tex",Me=>Me.texture)),ye.code.add(M.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${at?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),be.include(Ae.z,ge),Ve.code.add(M.H`
          void main(void) {
            discardBySlice(vpos);
            ${Ye?M.H`
                    vec4 texColor = texture2D(tex, ${ge.hasColorTextureTransform?M.H`colorUV`:M.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${ge.output===H.H.ObjectAndLayerIdColor?M.H`outputObjectAndLayerIdColor();`:M.H`outputDepth(depth);`}
          }
        `);break;case H.H.Normal:(0,Pe.Sv)(ye,ge),be.include(I.w,ge),be.include(L.O,ge),be.include(se.Bb,ge),be.include(re.D,ge),be.include(ve.k,ge),Ye&&Ve.uniforms.add(new K.A("tex",Me=>Me.texture)),be.varyings.add("vPositionView","vec3"),ye.code.add(M.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${ge.normalType===L.h.Attribute?M.H`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${at?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),be.include(z.f5,ge),be.include(Ae.z,ge),Ve.code.add(M.H`
          void main() {
            discardBySlice(vpos);
            ${Ye?M.H`
                    vec4 texColor = texture2D(tex, ${ge.hasColorTextureTransform?M.H`colorUV`:M.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${ge.normalType===L.h.ScreenDerivative?M.H`
                vec3 normal = screenDerivativeNormal(vPositionView);`:M.H`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case H.H.Highlight:(0,Pe.Sv)(ye,ge),be.include(I.w,ge),be.include(re.D,ge),be.include(ve.k,ge),Ye&&Ve.uniforms.add(new K.A("tex",Me=>Me.texture)),ye.code.add(M.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${at?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),be.include(z.f5,ge),be.include(Ae.z,ge),be.include(xe,ge),Ve.code.add(M.H`
          void main() {
            discardBySlice(vpos);
            ${Ye?M.H`
                    vec4 texColor = texture2D(tex, ${ge.hasColorTextureTransform?M.H`colorUV`:M.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},46018:(Te,ie,v)=>{v.d(ie,{S:()=>U});var R=v(12032),S=v(99106);function U(H){H.include(R.n),H.code.add(S.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},21187:(Te,ie,v)=>{v.d(ie,{Q:()=>re});var R=v(49549),S=v(20333),U=v(5395),H=v(77656),z=v(99106),I=v(89548),L=v(94391),M=v(67852),D=v(30428),W=v(51663);function re(se,Y){const ae=se.fragment;if(Y.hasVertexTangents?(se.attributes.add(W.T.TANGENT,"vec4"),se.varyings.add("vTangent","vec4"),ae.code.add(Y.doubleSidedMode===U.q.WindingOrder?z.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`:z.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(se.extensions.add("GL_OES_standard_derivatives"),ae.code.add(z.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),Y.textureCoordinateType!==R.N.None){se.include(S.i,Y);const he=Y.supportsTextureAtlas?Y.hasWebGL2Context?M.D.None:M.D.Size:M.D.None;ae.uniforms.add(Y.pbrTextureBindType===D.P.Pass?(0,L.J)("normalTexture",ne=>ne.textureNormal,he):(0,I.F)("normalTexture",ne=>ne.textureNormal,he)),ae.code.add(z.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${Y.supportsTextureAtlas?z.H`vtc.size = ${(0,H.w_)(Y,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}},986:(Te,ie,v)=>{v.d(ie,{K:()=>be});var R=v(77656),S=v(99106),U=v(94391),H=v(67852),L=(v(80775),v(38848),v(42757)),M=v(37362),D=v(61089),W=v(44505),re=v(38694),se=v(22473);class Y extends M.A{initializeProgram(ye){return new W.$(ye.rctx,Y.shader.get().build(),D.i)}initializePipeline(){return(0,se.sm)({colorWrite:se.BK})}}Y.shader=new L.J(re.S,()=>v.e(33).then(v.bind(v,80033)));var ae=v(30265);class he extends M.A{initializeProgram(ye){return new W.$(ye.rctx,he.shader.get().build(),D.i)}initializePipeline(){return(0,se.sm)({colorWrite:se.BK})}}he.shader=new L.J(ae.S,()=>v.e(2476).then(v.bind(v,52476))),v(83457),v(69923),v(2512),v(74697),v(68267);const Oe=2;function be(ge,ye){const Ve=ge.fragment;ye.receiveAmbientOcclusion?(Ve.uniforms.add((0,U.J)("ssaoTex",(at,Ye)=>Ye.ssaoHelper.colorTexture,ye.hasWebGL2Context?H.D.None:H.D.InvSize)),Ve.constants.add("blurSizePixelsInverse","float",1/Oe),Ve.code.add(S.H`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${(0,R.w_)(ye,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):Ve.code.add(S.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},69156:(Te,ie,v)=>{v.d(ie,{XP:()=>Z,PN:()=>Xe,sC:()=>G});var R=v(31385),S=v(92950),U=v(77765),H=v(71943),z=v(91746),I=v(85950),L=v(26615),M=v(4058),D=v(99106);function W(q,X){const te=q.fragment,fe=void 0!==X.lightingSphericalHarmonicsOrder?X.lightingSphericalHarmonicsOrder:2;0===fe?(te.uniforms.add(new L.J("lightingAmbientSH0",(ue,le)=>(0,S.s)(re,le.lighting.sh.r[0],le.lighting.sh.g[0],le.lighting.sh.b[0]))),te.code.add(D.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===fe?(te.uniforms.add([new M.N("lightingAmbientSH_R",(ue,le)=>(0,H.s)(se,le.lighting.sh.r[0],le.lighting.sh.r[1],le.lighting.sh.r[2],le.lighting.sh.r[3])),new M.N("lightingAmbientSH_G",(ue,le)=>(0,H.s)(se,le.lighting.sh.g[0],le.lighting.sh.g[1],le.lighting.sh.g[2],le.lighting.sh.g[3])),new M.N("lightingAmbientSH_B",(ue,le)=>(0,H.s)(se,le.lighting.sh.b[0],le.lighting.sh.b[1],le.lighting.sh.b[2],le.lighting.sh.b[3]))]),te.code.add(D.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===fe&&(te.uniforms.add([new L.J("lightingAmbientSH0",(ue,le)=>(0,S.s)(re,le.lighting.sh.r[0],le.lighting.sh.g[0],le.lighting.sh.b[0])),new M.N("lightingAmbientSH_R1",(ue,le)=>(0,H.s)(se,le.lighting.sh.r[1],le.lighting.sh.r[2],le.lighting.sh.r[3],le.lighting.sh.r[4])),new M.N("lightingAmbientSH_G1",(ue,le)=>(0,H.s)(se,le.lighting.sh.g[1],le.lighting.sh.g[2],le.lighting.sh.g[3],le.lighting.sh.g[4])),new M.N("lightingAmbientSH_B1",(ue,le)=>(0,H.s)(se,le.lighting.sh.b[1],le.lighting.sh.b[2],le.lighting.sh.b[3],le.lighting.sh.b[4])),new M.N("lightingAmbientSH_R2",(ue,le)=>(0,H.s)(se,le.lighting.sh.r[5],le.lighting.sh.r[6],le.lighting.sh.r[7],le.lighting.sh.r[8])),new M.N("lightingAmbientSH_G2",(ue,le)=>(0,H.s)(se,le.lighting.sh.g[5],le.lighting.sh.g[6],le.lighting.sh.g[7],le.lighting.sh.g[8])),new M.N("lightingAmbientSH_B2",(ue,le)=>(0,H.s)(se,le.lighting.sh.b[5],le.lighting.sh.b[6],le.lighting.sh.b[7],le.lighting.sh.b[8]))]),te.code.add(D.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),X.pbrMode!==I.f7.Normal&&X.pbrMode!==I.f7.Schematic||te.code.add(D.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const re=(0,U.c)(),se=(0,z.c)();var Y=v(986),ae=v(98805),he=v(83114),ne=v(23329),K=v(21160),ee=v(30428);class J extends K.x{constructor(X,te){super(X,"bool",ee.P.Pass,(fe,ue,le)=>fe.setUniform1b(X,te(ue,le)))}}var de=v(43282);v(93142),(0,U.c)();const me=.4;function Xe(q){q.constants.add("ambientBoostFactor","float",me)}function G(q){q.uniforms.add(new de.p("lightingGlobalFactor",(X,te)=>te.lighting.globalFactor))}function Z(q,X){const te=q.fragment;switch(q.include(Y.K,X),X.pbrMode!==I.f7.Disabled&&q.include(he.T,X),q.include(W,X),q.include(ne.e),te.code.add(D.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${X.pbrMode===I.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Xe(te),G(te),(0,ae.Pe)(te),te.code.add(D.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${X.spherical?D.H`normalize(vPosWorld)`:D.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,ae.F1)(te),te.code.add(D.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),X.pbrMode){case I.f7.Disabled:case I.f7.WaterOnIntegratedMesh:case I.f7.Water:q.include(ae.kR,X),te.code.add(D.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case I.f7.Normal:case I.f7.Schematic:te.code.add(D.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),te.code.add(D.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),X.useFillLights?te.uniforms.add(new J("hasFillLights",(fe,ue)=>ue.enableFillLights)):te.constants.add("hasFillLights","bool",!1),te.code.add(D.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),te.uniforms.add([new de.p("lightingSpecularStrength",(fe,ue)=>ue.lighting.mainLight.specularStrength),new de.p("lightingEnvironmentStrength",(fe,ue)=>ue.lighting.mainLight.environmentStrength)]),te.code.add(D.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),te.code.add(D.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${X.pbrMode===I.f7.Schematic?D.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:D.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case I.f7.Terrain:case I.f7.TerrainWithWater:q.include(ae.kR,X),te.code.add(D.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,R.Bg)(X.pbrMode);case I.f7.COUNT:}}(0,U.c)()},98805:(Te,ie,v)=>{v.d(ie,{F1:()=>z,Pe:()=>H,kR:()=>L});var R=v(26615),S=v(43282),U=v(99106);function H(M){M.uniforms.add(new R.J("mainLightDirection",(D,W)=>W.lighting.mainLight.direction))}function z(M){M.uniforms.add(new R.J("mainLightIntensity",(D,W)=>W.lighting.mainLight.intensity))}function L(M,D){const W=M.fragment;H(W),z(W),function I(M,D){D.useLegacyTerrainShading?M.uniforms.add(new S.p("lightingFixedFactor",(W,re)=>re.lighting.noonFactor*(1-re.lighting.globalFactor))):M.constants.add("lightingFixedFactor","float",0)}(W,D),W.code.add(U.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},57895:(Te,ie,v)=>{v.d(ie,{l:()=>z});var R=v(46018),S=v(71882),U=v(99106),H=v(94391);function z(L,M){M.hasMultipassTerrain&&(L.fragment.include(R.S),L.fragment.uniforms.add(new H.A("terrainDepthTexture",(D,W)=>W.multipassTerrain.linearDepthTexture)),L.fragment.uniforms.add(new S.A("nearFar",(D,W)=>W.camera.nearFar)),L.fragment.uniforms.add(new S.A("inverseViewport",(D,W)=>W.inverseViewport)),L.fragment.code.add(U.H`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${M.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}},5395:(Te,ie,v)=>{v.d(ie,{k:()=>U,q:()=>H});var H,z,R=v(31385),S=v(99106);function U(z,I){const L=z.fragment;switch(L.code.add(S.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),I.doubleSidedMode){case H.None:L.code.add(S.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case H.View:L.code.add(S.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case H.WindingOrder:L.code.add(S.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,R.Bg)(I.doubleSidedMode);case H.COUNT:}}(z=H||(H={}))[z.None=0]="None",z[z.View=1]="View",z[z.WindingOrder=2]="WindingOrder",z[z.COUNT=3]="COUNT"},83114:(Te,ie,v)=>{v.d(ie,{T:()=>z});var R=v(99106);function S(L){const M=L.fragment.code;M.add(R.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),M.add(R.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),M.add(R.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var U=v(85950),H=v(23329);function z(L,M){const D=L.fragment.code;L.include(H.e),M.pbrMode!==U.f7.Normal&&M.pbrMode!==U.f7.Schematic&&M.pbrMode!==U.f7.Terrain&&M.pbrMode!==U.f7.TerrainWithWater||(D.add(R.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),D.add(R.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),M.pbrMode!==U.f7.Normal&&M.pbrMode!==U.f7.Schematic||(L.include(S),D.add(R.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),D.add(R.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),D.add(R.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),D.add(R.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},85950:(Te,ie,v)=>{v.d(ie,{f7:()=>Y,jV:()=>he});var Y,ne,R=v(49533),S=v(20333),U=v(77656),H=v(89501),z=v(26615),I=v(99106),L=v(89548),M=v(94391),D=v(67852),W=v(30428);function he(ne,K){const ee=ne.fragment,J=K.hasMetallicRoughnessTexture||K.hasEmissionTexture||K.hasOcclusionTexture;if(K.pbrMode===Y.Normal&&J&&ne.include(S.i,K),K.pbrMode!==Y.Schematic)if(K.pbrMode!==Y.Disabled){if(K.pbrMode===Y.Normal){ee.code.add(I.H`vec3 mrr;
vec3 emission;
float occlusion;`);const de=K.supportsTextureAtlas?K.hasWebGL2Context?D.D.None:D.D.Size:D.D.None,xe=K.pbrTextureBindType;K.hasMetallicRoughnessTexture&&(ee.uniforms.add(xe===W.P.Pass?(0,M.J)("texMetallicRoughness",ve=>ve.textureMetallicRoughness,de):(0,L.F)("texMetallicRoughness",ve=>ve.textureMetallicRoughness,de)),ee.code.add(I.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),K.hasEmissionTexture&&(ee.uniforms.add(xe===W.P.Pass?(0,M.J)("texEmission",ve=>ve.textureEmissive,de):(0,L.F)("texEmission",ve=>ve.textureEmissive,de)),ee.code.add(I.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),K.hasOcclusionTexture?(ee.uniforms.add(xe===W.P.Pass?(0,M.J)("texOcclusion",ve=>ve.textureOcclusion,de):(0,L.F)("texOcclusion",ve=>ve.textureOcclusion,de)),ee.code.add(I.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):ee.code.add(I.H`float getBakedOcclusion() { return 1.0; }`),ee.uniforms.add(xe===W.P.Pass?[new z.J("emissionFactor",ve=>ve.emissiveFactor),new z.J("mrrFactors",ve=>ve.mrrFactors)]:[new H.B("emissionFactor",ve=>ve.emissiveFactor),new H.B("mrrFactors",ve=>ve.mrrFactors)]),ee.code.add(I.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${J?I.H`vtc.uv = vuv0;`:""}
      ${K.hasMetallicRoughnessTextureTransform?I.H`vtc.uv = metallicRoughnessUV;`:""}
      ${K.hasMetallicRoughnessTexture?K.supportsTextureAtlas?I.H`
                vtc.size = ${(0,U.w_)(K,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:I.H`applyMetallnessAndRoughness(vtc);`:""}
      ${K.hasEmissiveTextureTransform?I.H`vtc.uv = emissiveUV;`:""}
      ${K.hasEmissionTexture?K.supportsTextureAtlas?I.H`
                vtc.size = ${(0,U.w_)(K,"texEmission")};
                applyEmission(vtc);`:I.H`applyEmission(vtc);`:""}
      ${K.hasOcclusionTextureTransform?I.H`vtc.uv = occlusionUV;`:""}
      ${K.hasOcclusionTexture?K.supportsTextureAtlas?I.H`
                vtc.size = ${(0,U.w_)(K,"texOcclusion")};
                applyOcclusion(vtc);`:I.H`applyOcclusion(vtc);`:""}
    }
  `)}}else ee.code.add(I.H`float getBakedOcclusion() { return 1.0; }`);else ee.code.add(I.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}v(99381),(0,R.f)(0,.6,.2),(ne=Y||(Y={}))[ne.Disabled=0]="Disabled",ne[ne.Normal=1]="Normal",ne[ne.Schematic=2]="Schematic",ne[ne.Water=3]="Water",ne[ne.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",ne[ne.Terrain=5]="Terrain",ne[ne.TerrainWithWater=6]="TerrainWithWater",ne[ne.COUNT=7]="COUNT"},23329:(Te,ie,v)=>{v.d(ie,{e:()=>S});var R=v(99106);function S(U){U.vertex.code.add(R.H`const float PI = 3.141592653589793;`),U.fragment.code.add(R.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},50283:(Te,ie,v)=>{v.d(ie,{XE:()=>he,hb:()=>ae}),v(77765);var S=v(12032),U=v(77656),H=v(4058),z=v(29402),I=v(99106),L=v(21160),M=v(30428);class D extends L.x{constructor(ee,J,de){super(ee,"mat4",M.P.Draw,(xe,ve,Ae)=>xe.setUniformMatrix4fv(ee,J(ve,Ae)),de)}}class W extends L.x{constructor(ee,J,de){super(ee,"mat4",M.P.Pass,(xe,ve,Ae)=>xe.setUniformMatrix4fv(ee,J(ve,Ae)),de)}}var re=v(94391),se=v(67852);function ae(K,ee){ee.receiveShadows&&(K.fragment.uniforms.add(new W("shadowMapMatrix",(J,de)=>de.shadowMap.getShadowMapMatrices(J.origin),4)),ne(K,ee))}function he(K,ee){ee.receiveShadows&&(K.fragment.uniforms.add(new D("shadowMapMatrix",(J,de)=>de.shadowMap.getShadowMapMatrices(J.origin),4)),ne(K,ee))}function ne(K,ee){const J=K.fragment;J.include(S.n),J.uniforms.add([...(0,re.J)("shadowMapTex",(de,xe)=>xe.shadowMap.depthTexture,ee.hasWebGL2Context?se.D.None:se.D.Size),new z._("numCascades",(de,xe)=>xe.shadowMap.numCascades),new H.N("cascadeDistances",(de,xe)=>xe.shadowMap.cascadeDistances)]),J.code.add(I.H`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${(0,U.w_)(ee,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}},77679:(Te,ie,v)=>{v.d(ie,{DT:()=>D,NI:()=>I,R5:()=>L,av:()=>z,jF:()=>M});var R=v(53661),S=v(40334),U=v(99106),H=v(43790);function z(W){W.vertex.uniforms.add(new H.c("colorTextureTransformMatrix",re=>(0,R.pC)(re.colorTextureTransformMatrix)?re.colorTextureTransformMatrix:(0,S.c)())),W.varyings.add("colorUV","vec2"),W.vertex.code.add(U.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function I(W){W.vertex.uniforms.add(new H.c("normalTextureTransformMatrix",re=>(0,R.pC)(re.normalTextureTransformMatrix)?re.normalTextureTransformMatrix:(0,S.c)())),W.varyings.add("normalUV","vec2"),W.vertex.code.add(U.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function L(W){W.vertex.uniforms.add(new H.c("emissiveTextureTransformMatrix",re=>(0,R.pC)(re.emissiveTextureTransformMatrix)?re.emissiveTextureTransformMatrix:(0,S.c)())),W.varyings.add("emissiveUV","vec2"),W.vertex.code.add(U.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function M(W){W.vertex.uniforms.add(new H.c("occlusionTextureTransformMatrix",re=>(0,R.pC)(re.occlusionTextureTransformMatrix)?re.occlusionTextureTransformMatrix:(0,S.c)())),W.varyings.add("occlusionUV","vec2"),W.vertex.code.add(U.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function D(W){W.vertex.uniforms.add(new H.c("metallicRoughnessTextureTransformMatrix",re=>(0,R.pC)(re.metallicRoughnessTextureTransformMatrix)?re.metallicRoughnessTextureTransformMatrix:(0,S.c)())),W.varyings.add("metallicRoughnessUV","vec2"),W.vertex.code.add(U.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}},56681:(Te,ie,v)=>{v.d(ie,{k:()=>ae});var R=v(26615),S=v(21160),U=v(30428);class H extends S.x{constructor(ne,K,ee){super(ne,"vec4",U.P.Pass,(J,de,xe)=>J.setUniform4fv(ne,K(de,xe)),ee)}}class z extends S.x{constructor(ne,K,ee){super(ne,"float",U.P.Pass,(J,de,xe)=>J.setUniform1fv(ne,K(de,xe)),ee)}}var I=v(99106),L=v(43790),M=v(51663);v(53251),v(77765),v(32051);const Y=8;function ae(he,ne){ne.hasVvInstancing&&(ne.vvSize||ne.vvColor)&&he.attributes.add(M.T.INSTANCEFEATUREATTRIBUTE,"vec4");const K=he.vertex;ne.vvSize?(K.uniforms.add(new R.J("vvSizeMinSize",ee=>ee.vvSizeMinSize)),K.uniforms.add(new R.J("vvSizeMaxSize",ee=>ee.vvSizeMaxSize)),K.uniforms.add(new R.J("vvSizeOffset",ee=>ee.vvSizeOffset)),K.uniforms.add(new R.J("vvSizeFactor",ee=>ee.vvSizeFactor)),K.uniforms.add(new L.c("vvSymbolRotationMatrix",ee=>ee.vvSymbolRotationMatrix)),K.uniforms.add(new R.J("vvSymbolAnchor",ee=>ee.vvSymbolAnchor)),K.code.add(I.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),K.code.add(I.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${ne.hasVvInstancing?I.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):K.code.add(I.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),ne.vvColor?(K.constants.add("vvColorNumber","int",Y),ne.hasVvInstancing&&K.uniforms.add([new z("vvColorValues",ee=>ee.vvColorValues,Y),new H("vvColorColors",ee=>ee.vvColorColors,Y)]),K.code.add(I.H`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${ne.hasVvInstancing?I.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):K.code.add(I.H`vec4 vvColor() { return vec4(1.0); }`)}},63855:(Te,ie,v)=>{v.d(ie,{F:()=>R,b:()=>S});const R=.1,S=.001},28958:(Te,ie,v)=>{v.d(ie,{z:()=>D});var R=v(63855),S=v(99106);function U(se){se.fragment.code.add(S.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${S.H.float(R.b)}) { discard; } }
  `)}v(21160),v(30428);var L=v(43282),M=v(2754);function D(se,Y){!function re(se,Y,ae){const he=se.fragment;switch(Y.alphaDiscardMode!==M.JJ.Mask&&Y.alphaDiscardMode!==M.JJ.MaskBlend||he.uniforms.add(ae),Y.alphaDiscardMode){case M.JJ.Blend:return se.include(U);case M.JJ.Opaque:he.code.add(S.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case M.JJ.Mask:he.code.add(S.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case M.JJ.MaskBlend:se.fragment.code.add(S.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(se,Y,new L.p("textureAlphaCutoff",ae=>ae.textureAlphaCutoff))}},14302:(Te,ie,v)=>{v.d(ie,{G:()=>M,R:()=>re});var R=v(80775),S=v(83457),U=v(71943),H=v(91746),z=v(71882),I=v(4058),L=v(99106);function M(Y){Y.fragment.uniforms.add(new I.N("projInfo",(ae,he)=>function D(Y){const ae=Y.camera.projectionMatrix;return 0===ae[11]?(0,U.s)(W,2/(Y.camera.fullWidth*ae[0]),2/(Y.camera.fullHeight*ae[5]),(1+ae[12])/ae[0],(1+ae[13])/ae[5]):(0,U.s)(W,-2/(Y.camera.fullWidth*ae[0]),-2/(Y.camera.fullHeight*ae[5]),(1-ae[8])/ae[0],(1-ae[9])/ae[5])}(he))),Y.fragment.uniforms.add(new z.A("zScale",(ae,he)=>re(he))),Y.fragment.code.add(L.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const W=(0,H.c)();function re(Y){return 0===Y.camera.projectionMatrix[11]?(0,R.s)(se,0,1):(0,R.s)(se,1,0)}const se=(0,S.a)()},10168:(Te,ie,v)=>{v.d(ie,{$:()=>S});var R=v(99106);function S({code:U},H){U.add(H.doublePrecisionRequiresObfuscation?R.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`:R.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},64040:(Te,ie,v)=>{v.d(ie,{y:()=>H});var R=v(61090),S=v(99106);function U(z){z.code.add(S.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function H(z){z.include(U),z.code.add(S.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${S.H.int(R.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${S.H.int(R.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${S.H.int(R.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${S.H.int(R.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${S.H.int(R.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},12032:(Te,ie,v)=>{v.d(ie,{n:()=>S});var R=v(99106);function S(U){U.code.add(R.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},89877:(Te,ie,v)=>{v.d(ie,{hY:()=>re,Sv:()=>se,_8:()=>he});var R=v(64544),S=v(44171),U=v(92950),H=v(77765),z=v(89501),I=v(26615),L=v(21160),M=v(30428);class D extends L.x{constructor(K,ee){super(K,"mat4",M.P.Draw,(J,de,xe)=>J.setUniformMatrix4fv(K,ee(de,xe)))}}var W=v(63924);function re(ne,K){K.instancedDoublePrecision?ne.constants.add("cameraPosition","vec3",H.Z):ne.uniforms.add(new z.B("cameraPosition",(ee,J)=>(0,U.s)(ae,J.camera.viewInverseTransposeMatrix[3]-ee.origin[0],J.camera.viewInverseTransposeMatrix[7]-ee.origin[1],J.camera.viewInverseTransposeMatrix[11]-ee.origin[2])))}function se(ne,K){if(!K.instancedDoublePrecision)return void ne.uniforms.add([new W.g("proj",(J,de)=>de.camera.projectionMatrix),new D("view",(J,de)=>(0,R.w)(Y,de.camera.viewMatrix,J.origin)),new z.B("localOrigin",J=>J.origin)]);const ee=J=>(0,U.s)(ae,J.camera.viewInverseTransposeMatrix[3],J.camera.viewInverseTransposeMatrix[7],J.camera.viewInverseTransposeMatrix[11]);ne.uniforms.add([new W.g("proj",(J,de)=>de.camera.projectionMatrix),new W.g("view",(J,de)=>(0,R.w)(Y,de.camera.viewMatrix,ee(de))),new I.J("localOrigin",(J,de)=>ee(de))])}const Y=(0,S.c)(),ae=(0,H.c)();function he(ne){ne.uniforms.add(new W.g("viewNormal",(K,ee)=>ee.camera.viewInverseTransposeMatrix))}},77656:(Te,ie,v)=>{v.d(ie,{aU:()=>U,b6:()=>z,o_:()=>S,w_:()=>H});var R=v(99106);const S="Size",U="InvSize";function H(I,L,M=!1,D=0){if(I.hasWebGL2Context){const W=R.H`vec2(textureSize(${L}, ${R.H.int(D)}))`;return M?"(1.0 / "+W+")":W}return M?L+U:L+S}function z(I,L,M,D=null,W=0){if(I.hasWebGL2Context)return R.H`texelFetch(${L}, ivec2(${M}), ${R.H.int(W)})`;let re=R.H`texture2D(${L}, ${M} * `;return re+=D?R.H`(${D}))`:R.H`${L+U})`,re}},85634:(Te,ie,v)=>{v.d(ie,{q:()=>U});var R=v(21160),S=v(30428);class U extends R.x{constructor(z,I){super(z,"vec2",S.P.Draw,(L,M,D,W)=>L.setUniform2fv(z,I(M,D,W)))}}},71882:(Te,ie,v)=>{v.d(ie,{A:()=>U});var R=v(21160),S=v(30428);class U extends R.x{constructor(z,I){super(z,"vec2",S.P.Pass,(L,M,D)=>L.setUniform2fv(z,I(M,D)))}}},89501:(Te,ie,v)=>{v.d(ie,{B:()=>U});var R=v(21160),S=v(30428);class U extends R.x{constructor(z,I){super(z,"vec3",S.P.Draw,(L,M,D,W)=>L.setUniform3fv(z,I(M,D,W)))}}},26615:(Te,ie,v)=>{v.d(ie,{J:()=>U});var R=v(21160),S=v(30428);class U extends R.x{constructor(z,I){super(z,"vec3",S.P.Pass,(L,M,D)=>L.setUniform3fv(z,I(M,D)))}}},4058:(Te,ie,v)=>{v.d(ie,{N:()=>U});var R=v(21160),S=v(30428);class U extends R.x{constructor(z,I){super(z,"vec4",S.P.Pass,(L,M,D)=>L.setUniform4fv(z,I(M,D)))}}},43282:(Te,ie,v)=>{v.d(ie,{p:()=>U});var R=v(21160),S=v(30428);class U extends R.x{constructor(z,I){super(z,"float",S.P.Pass,(L,M,D)=>L.setUniform1f(z,I(M,D)))}}},29402:(Te,ie,v)=>{v.d(ie,{_:()=>U});var R=v(21160),S=v(30428);class U extends R.x{constructor(z,I){super(z,"int",S.P.Pass,(L,M,D)=>L.setUniform1i(z,I(M,D)))}}},49293:(Te,ie,v)=>{v.d(ie,{j:()=>U});var R=v(21160),S=v(30428);class U extends R.x{constructor(z,I){super(z,"mat3",S.P.Draw,(L,M,D)=>L.setUniformMatrix3fv(z,I(M,D)))}}},43790:(Te,ie,v)=>{v.d(ie,{c:()=>U});var R=v(21160),S=v(30428);class U extends R.x{constructor(z,I){super(z,"mat3",S.P.Pass,(L,M,D)=>L.setUniformMatrix3fv(z,I(M,D)))}}},63924:(Te,ie,v)=>{v.d(ie,{g:()=>U});var R=v(21160),S=v(30428);class U extends R.x{constructor(z,I){super(z,"mat4",S.P.Pass,(L,M,D)=>L.setUniformMatrix4fv(z,I(M,D)))}}},7427:(Te,ie,v)=>{v.d(ie,{kG:()=>I});var R=v(32995),S=v(28191),U=v(53661);const H=S.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class z{constructor(){this._includedModules=new Map}include(K,ee){if(this._includedModules.has(K)){const J=this._includedModules.get(K);if(J!==ee){H.error("Trying to include shader module multiple times with different sets of options.");const de=new Set;for(const xe of Object.keys(J))J[xe]!==K[xe]&&de.add(xe);for(const xe of Object.keys(K))J[xe]!==K[xe]&&de.add(xe);de.forEach(xe=>console.error(`  ${xe}: current ${J[xe]} new ${K[xe]}`))}}else this._includedModules.set(K,ee),K(this.builder,ee)}}class I extends z{constructor(){super(...arguments),this.vertex=new D,this.fragment=new D,this.attributes=new W,this.varyings=new re,this.extensions=new se,this.constants=new Y}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(K){const ee=this.extensions.generateSource(K),J=this.attributes.generateSource(K),de=this.varyings.generateSource(),xe="vertex"===K?this.vertex:this.fragment,ve=xe.uniforms.generateSource(),Ae=xe.code.generateSource(),Pe="vertex"===K?he:ae,Oe=this.constants.generateSource().concat(xe.constants.generateSource());return`\n${ee.join("\n")}\n\n${Pe}\n\n${Oe.join("\n")}\n\n${ve.join("\n")}\n\n${J.join("\n")}\n\n${de.join("\n")}\n\n${Ae.join("\n")}`}generateBind(K,ee){const J=new Map;this.vertex.uniforms.entries.forEach(ve=>{const Ae=ve.bind[K];(0,U.pC)(Ae)&&J.set(ve.name,Ae)}),this.fragment.uniforms.entries.forEach(ve=>{const Ae=ve.bind[K];(0,U.pC)(Ae)&&J.set(ve.name,Ae)});const de=Array.from(J.values()),xe=de.length;return(ve,Ae,Pe)=>{for(let Oe=0;Oe<xe;++Oe)de[Oe](ee,ve,Ae,Pe)}}}class L{constructor(){this._entries=new Map}add(K){if(!Array.isArray(K))return this._add(K);for(const ee of K)this._add(ee)}get(K){return this._entries.get(K)}_add(K){if((0,U.Wi)(K))H.error(`Trying to add null Uniform from ${(new Error).stack}.`);else{if(this._entries.has(K.name)&&!this._entries.get(K.name).equals(K))throw new R.Z(`Duplicate uniform name ${K.name} for different uniform type`);this._entries.set(K.name,K)}}generateSource(){return Array.from(this._entries.values()).map(K=>(0,U.pC)(K.arraySize)?`uniform ${K.type} ${K.name}[${K.arraySize}];`:`uniform ${K.type} ${K.name};`)}get entries(){return Array.from(this._entries.values())}}class M{constructor(){this._entries=new Array}add(K){this._entries.push(K)}generateSource(){return this._entries}}class D extends z{constructor(){super(...arguments),this.uniforms=new L,this.code=new M,this.constants=new Y}get builder(){return this}}class W{constructor(){this._entries=new Array}add(K,ee){this._entries.push([K,ee])}generateSource(K){return"fragment"===K?[]:this._entries.map(ee=>`attribute ${ee[1]} ${ee[0]};`)}}class re{constructor(){this._entries=new Array}add(K,ee){this._entries.push([K,ee])}generateSource(){return this._entries.map(K=>`varying ${K[1]} ${K[0]};`)}}class se{constructor(){this._entries=new Set}add(K){this._entries.add(K)}generateSource(K){const ee="vertex"===K?se.ALLOWLIST_VERTEX:se.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(J=>ee.includes(J)).map(J=>`#extension ${J} : enable`)}}se.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],se.ALLOWLIST_VERTEX=[];class Y{constructor(){this._entries=new Set}add(K,ee,J){let de="ERROR_CONSTRUCTOR_STRING";switch(ee){case"float":de=Y._numberToFloatStr(J);break;case"int":de=Y._numberToIntStr(J);break;case"bool":de=J.toString();break;case"vec2":de=`vec2(${Y._numberToFloatStr(J[0])},                            ${Y._numberToFloatStr(J[1])})`;break;case"vec3":de=`vec3(${Y._numberToFloatStr(J[0])},                            ${Y._numberToFloatStr(J[1])},                            ${Y._numberToFloatStr(J[2])})`;break;case"vec4":de=`vec4(${Y._numberToFloatStr(J[0])},                            ${Y._numberToFloatStr(J[1])},                            ${Y._numberToFloatStr(J[2])},                            ${Y._numberToFloatStr(J[3])})`;break;case"ivec2":de=`ivec2(${Y._numberToIntStr(J[0])},                             ${Y._numberToIntStr(J[1])})`;break;case"ivec3":de=`ivec3(${Y._numberToIntStr(J[0])},                             ${Y._numberToIntStr(J[1])},                             ${Y._numberToIntStr(J[2])})`;break;case"ivec4":de=`ivec4(${Y._numberToIntStr(J[0])},                             ${Y._numberToIntStr(J[1])},                             ${Y._numberToIntStr(J[2])},                             ${Y._numberToIntStr(J[3])})`;break;case"mat2":case"mat3":case"mat4":de=`${ee}(${Array.prototype.map.call(J,xe=>Y._numberToFloatStr(xe)).join(", ")})`}return this._entries.add(`const ${ee} ${K} = ${de};`),this}static _numberToIntStr(K){return K.toFixed(0)}static _numberToFloatStr(K){return Number.isInteger(K)?K.toFixed(1):K.toString()}generateSource(){return Array.from(this._entries)}}const ae="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",he="precision highp float;\nprecision highp sampler2D;"},89548:(Te,ie,v)=>{v.d(ie,{F:()=>W,R:()=>D});var R=v(53661),S=v(80775),U=v(83457),H=v(77656),z=v(85634),I=v(67852),L=v(21160),M=v(30428);class D extends L.x{constructor(Y,ae){super(Y,"sampler2D",M.P.Draw,(he,ne,K)=>he.bindTexture(Y,ae(ne,K)))}}function W(se,Y,ae=I.D.None){const he=[new D(se,Y)];return ae&I.D.Size&&he.push(new z.q(se+H.o_,(K,ee)=>{const J=Y(K,ee);return(0,R.pC)(J)?(0,S.s)(re,J.descriptor.width,J.descriptor.height):U.Z})),ae&I.D.InvSize&&he.push(new z.q(se+H.aU,(K,ee)=>{const J=Y(K,ee);return(0,R.pC)(J)?(0,S.s)(re,1/J.descriptor.width,1/J.descriptor.height):U.Z})),he}const re=(0,U.a)()},94391:(Te,ie,v)=>{v.d(ie,{A:()=>D,J:()=>W});var R=v(53661),S=v(80775),U=v(83457),H=v(77656),z=v(71882),I=v(67852),L=v(21160),M=v(30428);class D extends L.x{constructor(Y,ae){super(Y,"sampler2D",M.P.Pass,(he,ne,K)=>he.bindTexture(Y,ae(ne,K)))}}function W(se,Y,ae=I.D.None){const he=[new D(se,Y)];return ae&I.D.Size&&he.push(new z.A(se+H.o_,(K,ee)=>{const J=Y(K,ee);return(0,R.pC)(J)?(0,S.s)(re,J.descriptor.width,J.descriptor.height):U.Z})),ae&I.D.InvSize&&he.push(new z.A(se+H.aU,(K,ee)=>{const J=Y(K,ee);return(0,R.pC)(J)?(0,S.s)(re,1/J.descriptor.width,1/J.descriptor.height):U.Z})),he}const re=(0,U.a)()},67852:(Te,ie,v)=>{var R,S;v.d(ie,{D:()=>R}),(S=R||(R={}))[S.None=0]="None",S[S.Size=1]="Size",S[S.InvSize=2]="InvSize"},21160:(Te,ie,v)=>{v.d(ie,{x:()=>U});var R=v(53661),S=v(30428);class U{constructor(z,I,L,M,D=null){this.name=z,this.type=I,this.arraySize=D,this.bind={[S.P.Pass]:null,[S.P.Draw]:null},(0,R.pC)(L)&&(0,R.pC)(M)&&(this.bind[L]=M)}equals(z){return this.type===z.type&&this.name===z.name&&this.arraySize===z.arraySize}}},99106:(Te,ie,v)=>{v.d(ie,{H:()=>U,K:()=>S});const S=class R{};function U(H,...z){let I="";for(let L=0;L<z.length;L++)I+=H[L]+z[L];return I+=H[H.length-1],I}var H;(H=U||(U={})).int=function z(L){return Math.round(L).toString()},H.float=function I(L){return L.toPrecision(8)}},30428:(Te,ie,v)=>{var R,S;v.d(ie,{P:()=>R}),(S=R||(R={}))[S.Pass=0]="Pass",S[S.Draw=1]="Draw"},42757:(Te,ie,v)=>{v.d(ie,{J:()=>S});var R=v(71670);class S{constructor(H,z){this._module=H,this._loadModule=z}get(){return this._module}reload(){var H=this;return(0,R.Z)(function*(){return H._module=yield H._loadModule(),H._module})()}}},37362:(Te,ie,v)=>{v.d(ie,{A:()=>U});var R=v(53661),S=v(69923);class U{constructor(z,I,L){this.release=L,this.initializeConfiguration(z,I),this._configuration=I.snapshot(),this._program=this.initializeProgram(z),this._pipeline=this.initializePipeline(z.rctx.capabilities)}destroy(){this._program=(0,R.M2)(this._program),this._pipeline=this._configuration=null}reload(z){(0,R.M2)(this._program),this._program=this.initializeProgram(z),this._pipeline=this.initializePipeline(z.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(z,I=null,L){z.setPipelineState(this.getPipelineState(I,L))}ensureAttributeLocations(z){this.program.assertCompatibleVertexAttributeLocations(z)}get primitiveType(){return S.MX.TRIANGLES}getPipelineState(z,I){return this._pipeline}initializeConfiguration(z,I){}}},88721:(Te,ie,v)=>{v.d(ie,{m:()=>S,o:()=>U});var R=v(99106);class S extends R.K{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const z=this._parameterNames,I={key:this.key};for(const L of z)I[L]=this[L];return I}}function U(H={}){return(z,I)=>{if(z._parameterNames=z._parameterNames??[],z._parameterNames.push(I),null!=H.constValue)Object.defineProperty(z,I,{get:()=>H.constValue});else{const L=z._parameterNames.length-1,D=Math.ceil(Math.log2(H.count||2)),W=z._parameterBits??[0];let re=0;for(;W[re]+D>16;)re++,re>=W.length&&W.push(0);z._parameterBits=W;const se=W[re],Y=(1<<D)-1<<se;W[re]+=D,Object.defineProperty(z,I,{get(){return this[L]},set(ae){if(this[L]!==ae&&(this[L]=ae,this._keyDirty=!0,this._parameterBits[re]=this._parameterBits[re]&~Y|+ae<<se&Y,"number"!=typeof ae&&"boolean"!=typeof ae))throw new Error("Configuration value for "+I+" must be boolean or number, got "+typeof ae)}})}}}},49197:(Te,ie,v)=>{v.d(ie,{a:()=>R});class R{constructor(U,H,z=!1,I=H){this.data=U,this.size=H,this.exclusive=z,this.stride=I}}},25472:(Te,ie,v)=>{v.d(ie,{c:()=>S});var R=v(29962);class S{constructor(){this.id=(0,R.D)()}unload(){}}},25207:(Te,ie,v)=>{var R,S;v.d(ie,{U:()=>R}),(S=R||(R={}))[S.Layer=0]="Layer",S[S.Object=1]="Object",S[S.Mesh=2]="Mesh",S[S.Line=3]="Line",S[S.Point=4]="Point",S[S.Material=5]="Material",S[S.Texture=6]="Texture",S[S.COUNT=7]="COUNT"},61089:(Te,ie,v)=>{v.d(ie,{i:()=>S});var R=v(51663);const S=new Map([[R.T.POSITION,0],[R.T.NORMAL,1],[R.T.UV0,2],[R.T.COLOR,3],[R.T.SIZE,4],[R.T.TANGENT,4],[R.T.AUXPOS1,5],[R.T.SYMBOLCOLOR,5],[R.T.AUXPOS2,6],[R.T.FEATUREATTRIBUTE,6],[R.T.INSTANCEFEATUREATTRIBUTE,6],[R.T.INSTANCECOLOR,7],[R.T.OBJECTANDLAYERIDCOLOR,7],[R.T.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[R.T.MODEL,8],[R.T.MODELNORMAL,12],[R.T.MODELORIGINHI,11],[R.T.MODELORIGINLO,15]])},99381:(Te,ie,v)=>{v.d(ie,{F:()=>I});var R=v(53661),S=v(30801),U=v(99106),H=v(2754);class z{constructor(D){this._material=D.material,this._techniqueRepository=D.techniqueRep,this._output=D.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(D,W){return this._technique=this._techniqueRepository.releaseAndAcquire(D,this._material.getConfiguration(this._output,W),this._technique),this._technique}ensureResources(D){return H.Rw.LOADED}}class I extends z{constructor(D){super(D),this._numLoading=0,this._disposed=!1,this._textureRepository=D.textureRep,this._textureId=D.textureId,this._acquire(D.textureId,W=>this._texture=W),this._acquire(D.normalTextureId,W=>this._textureNormal=W),this._acquire(D.emissiveTextureId,W=>this._textureEmissive=W),this._acquire(D.occlusionTextureId,W=>this._textureOcclusion=W),this._acquire(D.metallicRoughnessTextureId,W=>this._textureMetallicRoughness=W)}dispose(){this._texture=(0,R.RY)(this._texture),this._textureNormal=(0,R.RY)(this._textureNormal),this._textureEmissive=(0,R.RY)(this._textureEmissive),this._textureOcclusion=(0,R.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,R.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(D){return 0===this._numLoading?H.Rw.LOADED:H.Rw.LOADING}get textureBindParameters(){return new L((0,R.pC)(this._texture)?this._texture.glTexture:null,(0,R.pC)(this._textureNormal)?this._textureNormal.glTexture:null,(0,R.pC)(this._textureEmissive)?this._textureEmissive.glTexture:null,(0,R.pC)(this._textureOcclusion)?this._textureOcclusion.glTexture:null,(0,R.pC)(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(D){((0,R.Wi)(this._texture)||D!==this._texture.id)&&(this._texture=(0,R.RY)(this._texture),this._textureId=D,this._acquire(this._textureId,W=>this._texture=W))}_acquire(D,W){if((0,R.Wi)(D))return void W(null);const re=this._textureRepository.acquire(D);if((0,S.y8)(re))return++this._numLoading,void re.then(se=>{if(this._disposed)return(0,R.RY)(se),void W(null);W(se)}).finally(()=>--this._numLoading);W(re)}}class L extends U.K{constructor(D=null,W=null,re=null,se=null,Y=null){super(),this.texture=D,this.textureNormal=W,this.textureEmissive=re,this.textureOcclusion=se,this.textureMetallicRoughness=Y}}},8330:(Te,ie,v)=>{v.d(ie,{$z:()=>U,DX:()=>M,mi:()=>S,p:()=>L});var R=v(13878);function S(D){if(Array.isArray(D)){if(D.length<R.DB)return D;for(const W of D)if(W>=65536)return new Uint32Array(D);return new Uint16Array(D)}if(D.length<R.DB)return Array.from(D);if(D.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return D;for(const W of D)if(W>=65536)return D;return new Uint16Array(D)}function U(D){const W=3*D;return W<=R.DB?new Array(W):W<=65536?new Uint16Array(W):new Uint32Array(W)}let H=(()=>{const D=new Uint32Array(131072);for(let W=0;W<D.length;++W)D[W]=W;return D})();const z=[0],I=(()=>{const D=new Uint16Array(65536);for(let W=0;W<D.length;++W)D[W]=W;return D})();function L(D){if(1===D)return z;if(D<R.DB)return Array.from(new Uint16Array(I.buffer,0,D));if(D<I.length)return new Uint16Array(I.buffer,0,D);if(D>H.length){const W=Math.max(2*H.length,D);H=new Uint32Array(W);for(let re=0;re<H.length;re++)H[re]=re}return new Uint32Array(H.buffer,0,D)}function M(D){if(1===D)return z;if(D<R.DB)return Array.from(new Uint16Array(I.buffer,0,D));if(D<I.length)return new Uint16Array(I.slice(0,D));if(D>H.length){const W=new Uint32Array(D);for(let re=0;re<W.length;re++)W[re]=re;return W}return new Uint32Array(H.slice(0,D))}},32051:(Te,ie,v)=>{v.d(ie,{F5:()=>M,yD:()=>W});var W,se,R=v(53661),S=v(77765),H=(v(99106),v(25472)),z=v(25207),I=v(61089),L=v(7680);class M extends H.c{constructor(Y,ae){super(),this.type=z.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=I.i,this._pp0=(0,S.f)(0,0,1),this._pp1=(0,S.f)(0,0,0),this._parameters=(0,L.Uf)(Y,ae),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(Y){return!1}setParameters(Y,ae=!0){(0,L.LO)(this._parameters,Y)&&(this.validateParameters(this._parameters),ae&&this.parametersChanged())}validateParameters(Y){}get visible(){return this._visible}set visible(Y){Y!==this._visible&&(this._visible=Y,this.parametersChanged())}shouldRender(Y){return this.isVisible()&&this.isVisibleForOutput(Y.output)&&0!=(this.renderOccluded&Y.renderOccludedMask)}isVisibleForOutput(Y){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(Y){Y!==this._renderPriority&&(this._renderPriority=Y,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(Y){Y!==this._insertOrder&&(this._insertOrder=Y,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,R.pC)(this.repository)&&this.repository.materialChanged(this)}intersectDraped(Y,ae,he,ne,K,ee){return this._pp0[0]=this._pp1[0]=ne[0],this._pp0[1]=this._pp1[1]=ne[1],this.intersect(Y,ae,he,this._pp0,this._pp1,K)}}(se=W||(W={}))[se.Occlude=1]="Occlude",se[se.Transparent=2]="Transparent",se[se.OccludeAndTransparent=4]="OccludeAndTransparent",se[se.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",se[se.Opaque=16]="Opaque"},31700:(Te,ie,v)=>{v.d(ie,{Bh:()=>se,IB:()=>I,j7:()=>L,je:()=>re,ve:()=>D,wu:()=>H});var R=v(63984),S=v(69923),U=v(22473);const H=(0,U.wK)(S.zi.SRC_ALPHA,S.zi.ONE,S.zi.ONE_MINUS_SRC_ALPHA,S.zi.ONE_MINUS_SRC_ALPHA),z=(0,U.if)(S.zi.ONE,S.zi.ONE),I=(0,U.if)(S.zi.ZERO,S.zi.ONE_MINUS_SRC_ALPHA);function L(Y){return Y===R.A.FrontFace?null:Y===R.A.Alpha?I:z}const D=5e5,W={factor:-1,units:-2};function re(Y){return Y?W:null}function se(Y,ae=S.wb.LESS){return Y===R.A.NONE||Y===R.A.FrontFace?ae:S.wb.LEQUAL}},44505:(Te,ie,v)=>{v.d(ie,{$:()=>z});var R=v(53661),S=v(22286),U=v(30428),H=v(4907);class z{constructor(L,M,D){this._context=L,this._locations=D,this._textures=new Map,this._freeTextureUnits=new S.Z({deallocator:null}),this._glProgram=L.programCache.acquire(M.generate("vertex"),M.generate("fragment"),D),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=M.generateBind(U.P.Pass,this),this.bindDraw=M.generateBind(U.P.Draw,this),this._fragmentUniforms=(0,H.hZ)()?M.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(L,M){this._glProgram.setUniform1i(L,M?1:0)}setUniform1i(L,M){this._glProgram.setUniform1i(L,M)}setUniform1f(L,M){this._glProgram.setUniform1f(L,M)}setUniform2fv(L,M){this._glProgram.setUniform2fv(L,M)}setUniform3fv(L,M){this._glProgram.setUniform3fv(L,M)}setUniform4fv(L,M){this._glProgram.setUniform4fv(L,M)}setUniformMatrix3fv(L,M){this._glProgram.setUniformMatrix3fv(L,M)}setUniformMatrix4fv(L,M){this._glProgram.setUniformMatrix4fv(L,M)}setUniform1fv(L,M){this._glProgram.setUniform1fv(L,M)}setUniform1iv(L,M){this._glProgram.setUniform1iv(L,M)}setUniform2iv(L,M){this._glProgram.setUniform3iv(L,M)}setUniform3iv(L,M){this._glProgram.setUniform3iv(L,M)}setUniform4iv(L,M){this._glProgram.setUniform4iv(L,M)}assertCompatibleVertexAttributeLocations(L){L.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(L,M){if((0,R.Wi)(M)||null==M.glName){const W=this._textures.get(L);return W&&(this._context.bindTexture(null,W.unit),this._freeTextureUnit(W),this._textures.delete(L)),null}let D=this._textures.get(L);return null==D?(D=this._allocTextureUnit(M),this._textures.set(L,D)):D.texture=M,this._context.useProgram(this),this.setUniform1i(L,D.unit),this._context.bindTexture(M,D.unit),D.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((L,M)=>{this._context.bindTexture(L.texture,L.unit),this.setUniform1i(M,L.unit)}),(0,R.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach(L=>{"sampler2D"!==L.type&&"samplerCube"!==L.type||this._textures.has(L.name)||console.error(`Texture sampler ${L.name} has no bound texture`)})}_allocTextureUnit(L){return{texture:L,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(L){this._freeTextureUnits.push(L.unit)}}},63984:(Te,ie,v)=>{var R,S;v.d(ie,{A:()=>R}),(S=R||(R={}))[S.Color=0]="Color",S[S.Alpha=1]="Alpha",S[S.FrontFace=2]="FrontFace",S[S.NONE=3]="NONE",S[S.COUNT=4]="COUNT"},51663:(Te,ie,v)=>{var R,S;v.d(ie,{T:()=>R}),(S=R||(R={})).POSITION="position",S.NORMAL="normal",S.UV0="uv0",S.AUXPOS1="auxpos1",S.AUXPOS2="auxpos2",S.COLOR="color",S.SYMBOLCOLOR="symbolColor",S.SIZE="size",S.TANGENT="tangent",S.OFFSET="offset",S.SUBDIVISIONFACTOR="subdivisionFactor",S.COLORFEATUREATTRIBUTE="colorFeatureAttribute",S.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",S.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",S.DISTANCETOSTART="distanceToStart",S.UVMAPSPACE="uvMapSpace",S.BOUNDINGRECT="boundingRect",S.UVREGION="uvRegion",S.NORMALCOMPRESSED="normalCompressed",S.PROFILERIGHT="profileRight",S.PROFILEUP="profileUp",S.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",S.FEATUREVALUE="featureValue",S.MODELORIGINHI="modelOriginHi",S.MODELORIGINLO="modelOriginLo",S.MODEL="model",S.MODELNORMAL="modelNormal",S.INSTANCECOLOR="instanceColor",S.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",S.LOCALTRANSFORM="localTransform",S.GLOBALTRANSFORM="globalTransform",S.BOUNDINGSPHERE="boundingSphere",S.MODELORIGIN="modelOrigin",S.MODELSCALEFACTORS="modelScaleFactors",S.FEATUREATTRIBUTE="featureAttribute",S.STATE="state",S.LODLEVEL="lodLevel",S.POSITION0="position0",S.POSITION1="position1",S.NORMALA="normalA",S.NORMALB="normalB",S.COMPONENTINDEX="componentIndex",S.VARIANTOFFSET="variantOffset",S.VARIANTSTROKE="variantStroke",S.VARIANTEXTENSION="variantExtension",S.U8PADDING="u8padding",S.U16PADDING="u16padding",S.SIDENESS="sideness",S.START="start",S.END="end",S.UP="up",S.EXTRUDE="extrude",S.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",S.OBJECTANDLAYERIDCOLOR_INSTANCED="objectAndLayerIdColor_instanced"},38848:(Te,ie,v)=>{v.d(ie,{ow:()=>he});var R=v(61089),S=v(51663),U=v(69923),H=v(33269);new H.G(S.T.POSITION,3,U.g.FLOAT,0,12),new H.G(S.T.POSITION,3,U.g.FLOAT,0,20),new H.G(S.T.UV0,2,U.g.FLOAT,12,20),new H.G(S.T.POSITION,3,U.g.FLOAT,0,32),new H.G(S.T.NORMAL,3,U.g.FLOAT,12,32),new H.G(S.T.UV0,2,U.g.FLOAT,24,32),new H.G(S.T.POSITION,3,U.g.FLOAT,0,16),new H.G(S.T.COLOR,4,U.g.UNSIGNED_BYTE,12,16);const D=[new H.G(S.T.POSITION,2,U.g.FLOAT,0,8)],W=[new H.G(S.T.POSITION,2,U.g.FLOAT,0,16),new H.G(S.T.UV0,2,U.g.FLOAT,8,16)];var re=v(19955);class se extends re.U{}var Y=v(10615);function he(xe,ve=D,Ae=R.i,Pe=-1,Oe=1){let Je=null;return Je=ve===W?new Float32Array([Pe,Pe,0,0,Oe,Pe,1,0,Pe,Oe,0,1,Oe,Oe,1,1]):new Float32Array([Pe,Pe,Oe,Pe,Pe,Oe,Oe,Oe]),new se(xe,Ae,{geometry:ve},{geometry:Y.f.createVertex(xe,U.l1.STATIC_DRAW,Je)})}v(74697)},7680:(Te,ie,v)=>{v.d(ie,{FZ:()=>pe,Uf:()=>Ce,Bw:()=>be,LO:()=>me,Hx:()=>ce});var R=v(19420),S=v(93142),U=v(53661),H=v(92950),z=v(77765),I=v(73327),L=v(25207);v(56108),(0,S.Vl)(10),(0,S.Vl)(12),(0,S.Vl)(70),(0,S.Vl)(40);const Ae={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var Oe=v(12042),Je=v(51663);const qe=(0,I.Ue)();function be(G,Z,q,X,te,fe){if(G.visible)if(G.boundingInfo)(0,Oe.hu)(G.type===L.U.Mesh),ye(G.boundingInfo,q,X,Z.tolerance,te,fe);else{const ue=G.indices.get(Je.T.POSITION),le=G.vertexAttributes.get(Je.T.POSITION);at(q,X,0,ue.length/3,ue,le,void 0,te,fe)}}const ge=(0,z.c)();function ye(G,Z,q,X,te,fe){if((0,U.Wi)(G))return;const ue=function Ie(G,Z,q){return(0,H.s)(q,1/(Z[0]-G[0]),1/(Z[1]-G[1]),1/(Z[2]-G[2]))}(Z,q,ge);if((0,I.op)(qe,G.bbMin),(0,I.Tn)(qe,G.bbMax),(0,U.pC)(te)&&te.applyToAabb(qe),function Ge(G,Z,q,X){return function et(G,Z,q,X,te){const fe=(G[0]-X-Z[0])*q[0],ue=(G[3]+X-Z[0])*q[0];let le=Math.min(fe,ue),Se=Math.max(fe,ue);const Ue=(G[1]-X-Z[1])*q[1],We=(G[4]+X-Z[1])*q[1];if(Se=Math.min(Se,Math.max(Ue,We)),Se<0||(le=Math.max(le,Math.min(Ue,We)),le>Se))return!1;const dt=(G[2]-X-Z[2])*q[2],mt=(G[5]+X-Z[2])*q[2];return Se=Math.min(Se,Math.max(dt,mt)),!(Se<0)&&(le=Math.max(le,Math.min(dt,mt)),!(le>Se)&&le<te)}(G,Z,q,X,1/0)}(qe,Z,ue,X)){const{primitiveIndices:le,indices:Se,position:Ue}=G,We=le?le.length:Se.length/3;if(We>Xe){const dt=G.getChildren();if(void 0!==dt){for(const mt of dt)ye(mt,Z,q,X,te,fe);return}}at(Z,q,0,We,Se,Ue,le,te,fe)}}const Ve=(0,z.c)();function at(G,Z,q,X,te,fe,ue,le,Se){if(ue)return function Ye(G,Z,q,X,te,fe,ue,le,Se){const{data:Ue,stride:We}=fe,dt=G[0],mt=G[1],Et=G[2],Tt=Z[0]-dt,xt=Z[1]-mt,nt=Z[2]-Et;for(let ft=q;ft<X;++ft){const Rt=ue[ft];let ut=3*Rt,vt=We*te[ut++],Dt=Ue[vt++],bt=Ue[vt++],Ke=Ue[vt];vt=We*te[ut++];let Jt=Ue[vt++],Vt=Ue[vt++],jt=Ue[vt];vt=We*te[ut];let Xt=Ue[vt++],St=Ue[vt++],Mt=Ue[vt];(0,U.pC)(le)&&([Dt,bt,Ke]=le.applyToVertex(Dt,bt,Ke,ft),[Jt,Vt,jt]=le.applyToVertex(Jt,Vt,jt,ft),[Xt,St,Mt]=le.applyToVertex(Xt,St,Mt,ft));const Pt=Jt-Dt,It=Vt-bt,wt=jt-Ke,Ut=Xt-Dt,Bt=St-bt,Ot=Mt-Ke,zt=xt*Ot-Bt*nt,er=nt*Ut-Ot*Tt,At=Tt*Bt-Ut*xt,Ct=Pt*zt+It*er+wt*At;if(Math.abs(Ct)<=Number.EPSILON)continue;const Kt=dt-Dt,Wt=mt-bt,Lt=Et-Ke,Nt=Kt*zt+Wt*er+Lt*At;if(Ct>0){if(Nt<0||Nt>Ct)continue}else if(Nt>0||Nt<Ct)continue;const Yt=Wt*wt-It*Lt,tr=Lt*Pt-wt*Kt,Zt=Kt*It-Pt*Wt,Gt=Tt*Yt+xt*tr+nt*Zt;if(Ct>0){if(Gt<0||Nt+Gt>Ct)continue}else if(Gt>0||Nt+Gt<Ct)continue;const mr=(Ut*Yt+Bt*tr+Ot*Zt)/Ct;mr>=0&&Se(mr,Ee(Pt,It,wt,Ut,Bt,Ot,Ve),Rt,!1)}}(G,Z,q,X,te,fe,ue,le,Se);const{data:Ue,stride:We}=fe,dt=G[0],mt=G[1],Et=G[2],Tt=Z[0]-dt,xt=Z[1]-mt,nt=Z[2]-Et;for(let ft=q,Rt=3*q;ft<X;++ft){let ut=We*te[Rt++],vt=Ue[ut++],Dt=Ue[ut++],bt=Ue[ut];ut=We*te[Rt++];let Ke=Ue[ut++],Jt=Ue[ut++],Vt=Ue[ut];ut=We*te[Rt++];let jt=Ue[ut++],Xt=Ue[ut++],St=Ue[ut];(0,U.pC)(le)&&([vt,Dt,bt]=le.applyToVertex(vt,Dt,bt,ft),[Ke,Jt,Vt]=le.applyToVertex(Ke,Jt,Vt,ft),[jt,Xt,St]=le.applyToVertex(jt,Xt,St,ft));const Mt=Ke-vt,Pt=Jt-Dt,It=Vt-bt,wt=jt-vt,Ut=Xt-Dt,Bt=St-bt,Ot=xt*Bt-Ut*nt,zt=nt*wt-Bt*Tt,er=Tt*Ut-wt*xt,At=Mt*Ot+Pt*zt+It*er;if(Math.abs(At)<=Number.EPSILON)continue;const Ct=dt-vt,Kt=mt-Dt,Wt=Et-bt,Lt=Ct*Ot+Kt*zt+Wt*er;if(At>0){if(Lt<0||Lt>At)continue}else if(Lt>0||Lt<At)continue;const Nt=Kt*It-Pt*Wt,Yt=Wt*Mt-It*Ct,tr=Ct*Pt-Mt*Kt,Zt=Tt*Nt+xt*Yt+nt*tr;if(At>0){if(Zt<0||Lt+Zt>At)continue}else if(Zt>0||Lt+Zt<At)continue;const Gt=(wt*Nt+Ut*Yt+Bt*tr)/At;Gt>=0&&Se(Gt,Ee(Mt,Pt,It,wt,Ut,Bt,Ve),ft,!1)}}const Me=(0,z.c)(),Re=(0,z.c)();function Ee(G,Z,q,X,te,fe,ue){return(0,H.s)(Me,G,Z,q),(0,H.s)(Re,X,te,fe),(0,H.f)(ue,Me,Re),(0,H.n)(ue,ue),ue}function ce(G,Z,q,X,te){let fe=(q.screenLength||0)*G.pixelRatio;(0,U.pC)(te)&&(fe=function ee(G,Z,q,X){return function ae(G,Z){return Math.max((0,S.t7)(G*Z.scale,G,Z.factor),function Y(G,Z){return 0===G?Z.minPixelSize:Z.minPixelSize*(1+2*Z.paddingPixels/G)}(G,Z))}(G,function se(G,Z,q){const X=q.parameters,te=q.paddingPixelsOverride;return Ae.scale=Math.min(X.divisor/(Z-X.offset),1),Ae.factor=function re(G){return Math.abs(G*G*G)}(G),Ae.minPixelSize=X.minPixelSize,Ae.paddingPixels=te,Ae}(Z,q,X))}(fe,X,Z,te));const ue=fe*Math.tan(.5*G.fovY)/(.5*G.fullHeight);return(0,S.uZ)(ue*Z,q.minWorldLength||0,null!=q.maxWorldLength?q.maxWorldLength:1/0)}function Ce(G,Z){const q=Z?Ce(Z):{};for(const X in G){let te=G[X];te&&te.forEach&&(te=oe(te)),null==te&&X in q||(q[X]=te)}return q}function me(G,Z){let q=!1;for(const X in Z){const te=Z[X];void 0!==te&&(Array.isArray(te)?null===G[X]?(G[X]=te.slice(),q=!0):(0,R.Vx)(G[X],te)&&(q=!0):G[X]!==te&&(q=!0,G[X]=te))}return q}function oe(G){const Z=[];return G.forEach(q=>Z.push(q)),Z}const pe={multiply:1,ignore:2,replace:3,tint:4},Xe=1e3},33269:(Te,ie,v)=>{v.d(ie,{G:()=>R});class R{constructor(U,H,z,I,L,M=!1,D=0){this.name=U,this.count=H,this.type=z,this.offset=I,this.stride=L,this.normalized=M,this.divisor=D}}},58013:(Te,ie,v)=>{function R(I,L,M){for(let D=0;D<M;++D)L[2*D]=I[D],L[2*D+1]=I[D]-L[2*D]}function U(I,L){const M=I.length;for(let D=0;D<M;++D)z[0]=I[D],L[D]=z[0];return L}function H(I,L){const M=I.length;for(let D=0;D<M;++D)z[0]=I[D],z[1]=I[D]-z[0],L[D]=z[1];return L}v.d(ie,{GB:()=>H,LF:()=>R,U8:()=>U});const z=new Float32Array(2)},22473:(Te,ie,v)=>{v.d(ie,{BK:()=>D,LZ:()=>M,if:()=>U,jp:()=>et,sm:()=>ee,wK:()=>H,zp:()=>L});var R=v(2754),S=v(69923);function U(ce,Ce,me=S.db.ADD,oe=[0,0,0,0]){return{srcRgb:ce,srcAlpha:ce,dstRgb:Ce,dstAlpha:Ce,opRgb:me,opAlpha:me,color:{r:oe[0],g:oe[1],b:oe[2],a:oe[3]}}}function H(ce,Ce,me,oe,pe=S.db.ADD,Xe=S.db.ADD,G=[0,0,0,0]){return{srcRgb:ce,srcAlpha:Ce,dstRgb:me,dstAlpha:oe,opRgb:pe,opAlpha:Xe,color:{r:G[0],g:G[1],b:G[2],a:G[3]}}}const z={face:S.LR.BACK,mode:S.Wf.CCW},I={face:S.LR.FRONT,mode:S.Wf.CCW},L=ce=>ce===R.Vr.Back?z:ce===R.Vr.Front?I:null,M={zNear:0,zFar:1},D={r:!0,g:!0,b:!0,a:!0};function W(ce){return xe.intern(ce)}function re(ce){return Ae.intern(ce)}function se(ce){return Oe.intern(ce)}function Y(ce){return qe.intern(ce)}function ae(ce){return ge.intern(ce)}function he(ce){return Ve.intern(ce)}function ne(ce){return Ye.intern(ce)}function K(ce){return Re.intern(ce)}function ee(ce){return Ie.intern(ce)}class J{constructor(Ce,me){this._makeKey=Ce,this._makeRef=me,this._interns=new Map}intern(Ce){if(!Ce)return null;const me=this._makeKey(Ce),oe=this._interns;return oe.has(me)||oe.set(me,this._makeRef(Ce)),oe.get(me)??null}}function de(ce){return"["+ce.join(",")+"]"}const xe=new J(ve,ce=>({__tag:"Blending",...ce}));function ve(ce){return ce?de([ce.srcRgb,ce.srcAlpha,ce.dstRgb,ce.dstAlpha,ce.opRgb,ce.opAlpha,ce.color.r,ce.color.g,ce.color.b,ce.color.a]):null}const Ae=new J(Pe,ce=>({__tag:"Culling",...ce}));function Pe(ce){return ce?de([ce.face,ce.mode]):null}const Oe=new J(Je,ce=>({__tag:"PolygonOffset",...ce}));function Je(ce){return ce?de([ce.factor,ce.units]):null}const qe=new J(be,ce=>({__tag:"DepthTest",...ce}));function be(ce){return ce?de([ce.func]):null}const ge=new J(ye,ce=>({__tag:"StencilTest",...ce}));function ye(ce){return ce?de([ce.function.func,ce.function.ref,ce.function.mask,ce.operation.fail,ce.operation.zFail,ce.operation.zPass]):null}const Ve=new J(at,ce=>({__tag:"DepthWrite",...ce}));function at(ce){return ce?de([ce.zNear,ce.zFar]):null}const Ye=new J(Me,ce=>({__tag:"ColorWrite",...ce}));function Me(ce){return ce?de([ce.r,ce.g,ce.b,ce.a]):null}const Re=new J(Ee,ce=>({__tag:"StencilWrite",...ce}));function Ee(ce){return ce?de([ce.mask]):null}const Ie=new J(function Ge(ce){return ce?de([ve(ce.blending),Pe(ce.culling),Je(ce.polygonOffset),be(ce.depthTest),ye(ce.stencilTest),at(ce.depthWrite),Me(ce.colorWrite),Ee(ce.stencilWrite)]):null},ce=>({blending:W(ce.blending),culling:re(ce.culling),polygonOffset:se(ce.polygonOffset),depthTest:Y(ce.depthTest),stencilTest:ae(ce.stencilTest),depthWrite:he(ce.depthWrite),colorWrite:ne(ce.colorWrite),stencilWrite:K(ce.stencilWrite)}));class et{constructor(Ce){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=Ce}setPipeline(Ce){(this._pipelineInvalid||Ce!==this._pipeline)&&(this._setBlending(Ce.blending),this._setCulling(Ce.culling),this._setPolygonOffset(Ce.polygonOffset),this._setDepthTest(Ce.depthTest),this._setStencilTest(Ce.stencilTest),this._setDepthWrite(Ce.depthWrite),this._setColorWrite(Ce.colorWrite),this._setStencilWrite(Ce.stencilWrite),this._pipeline=Ce),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(Ce){this._blending=this._setSubState(Ce,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(Ce){this._culling=this._setSubState(Ce,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(Ce){this._polygonOffset=this._setSubState(Ce,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(Ce){this._depthTest=this._setSubState(Ce,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(Ce){this._stencilTest=this._setSubState(Ce,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(Ce){this._depthWrite=this._setSubState(Ce,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(Ce){this._colorWrite=this._setSubState(Ce,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(Ce){this._stencilWrite=this._setSubState(Ce,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(Ce,me,oe,pe){return(oe||Ce!==me)&&(pe(Ce),this._pipelineInvalid=!0),Ce}}}}]);
//# sourceMappingURL=6062.7280ee12c3f963dc.js.map