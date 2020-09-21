function toMap(str) {
    return JSON.parse(LZString.decompressFromBase64(str));
}


var maps = {};


maps.loops = toMap('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');
maps.spiral = toMap('N4IgJglgzgDgNgQwJ4gFwG10gO4LnEAGhzwON3yJMvNKorOsYfrtpqdY5feboF1CWHiACmAWxgAXFMQnTZYyTKryVc5YrVbNq3RoV7DB9UuNnTLQcLYgpAe2yiATlQdPXxdy7eOfXv087QN8PUP9gsICoyIjvIO0uAmtOEx1zRLSjU0yLdJz9POzFeOKkkBSRXNLouJDaoJrYxvrm8ITCptyrIVSihrKsof6R3OrW8ZjugV6qzon5mKbl1q7FiMmNwp6bDk2O8zWMwrGT9YPTI8sZ3cZ9wbbhlaXV16nzh52++6eF4/+CgD8sD2p8bt8Pr8XtC6jCWnDQQNhl85oc/oCMSDhqcgQ8cddKJVbD9HqTnrCKfDKYiya0UcSzrjsYzMXiWVjRttwSIebZedw+YKBcK+CLyrxyvxBOBoPBkAARCCuDDoAAMhHVmo12q1up1OuseqN+uNmsNJotppN5qttutQjtjoNDstrttNrdnt1Hqd7pdvq9Pq9gf9wcdQYDRojYct0cjzrVMfD0oA5s4IGA0JgAIyEXP5vOFgvFotF6y59UAJkI1drNfrdcb9ez5cIAGZ252O92u72e9WW0Jc02Rw2xx2B63qz2Z33O9Pm1P52PRxPl4P0MPl7P+9vF0P62u19Wq4ez5ODwur3Pd2uN1ujyun9f7+eb++70vj8+fxfN2edw/XtX1HUCn3VV8Syg0toJbaVxFEKQEDABAkKzdAADsAFd8EIbDcPwuA8JwojCOIgiSPI0jKLI2iaPoij8GsOjGOo1iqI4li2O4ziGO45i+N49iuKEniRPEkiBOEwSJOkuSxJkyShFkhT5NE9SVKoqTVJ0jTFLUlTtL0gz9N0zTCKM8zTOMszTMs6yrJMpz+OUhy3OcmzRPsjzHNs5zvL8wLPN8gLgvcoLDNcnzwrC/yooimLfJsqViBgVCAAsoHQ+M/UTAAWQgCqKwqSuKsqSo7VU4yTTsqpdcqGtKirtUq80Kxqyrara7VGuKzr+o1bqIM9Ab1Val12va4rTxPWquom7VJpGlrBoW4bhrA2bxsTJb4229bC02n86p2mrTW6o6jpOnK3RSsQAA8ICkLMAHZCBe6VYAQbAMJgewIAwqQspVfNyw7bM2zugAjFMs29YgofsZwwB8VBKwAVnRhGkZR5wAEE4BgdKEDQNtcxAABjew4GB7MsZAZxHFp9GAF8gA==');
maps.branch = toMap('N4IgJglgzgDgNgQwJ4gFwG10gO4LnEAGhzwON3yJMvNKorOsYfrtpqdY5febc95c+3fiwC6hLDxAAXAPbYApgCchawRoFb5S1ZunSdK9VoOjzHI3s4SpFxooC2MGSmJOXbkB9dUfX/z9nX3dggLCgz0iQ7wjQqPiYwMTwhNi0s0pbU35knJEC4SKTTOL9exLcuPyCbNLor0MFY3LCqitKtuIO1rLZZutpPPq6ipTOvvreiZnpufSYkckahtmV+aHqvO2t6qmtYYrRroXGsfWLzYzzq8Wbquu248Ye05NX/abdE0PLAZ+9vwPg8YsCsst9r9JvcTrczrCQfDoRwoWpngC0jtMbtsbikji7giUYCiQ4ScV0ZpURsYci6WtPrS0RCgf9xpowfTumzLqzvjS/vyLpyQJSDuSGUyBVzeaSZmK4ZLiXjUviVUqyer2W9tUs7CdqRdDZCJdKNatpgrEe8eYqObbrfahYzBS1xY8KSyDaajT6TR7zWbdUcvX0sWqI6qkWtw1GLTqE7H43rtA65UH+s6pZm3S6ZV9c3QrenZfns3nA6XRRJwNB4MgACIQVQYdAABkIHa7nZ73b7vYH/b7tiHg7Ho4nvZH45nk7nnen86Xs6nkmX65XbcXm53S+3G4Pq/bu5Pc/3p4vXfPh4P18vp7vN93j/ve7Xr9fL6fZ/f38vX4/CcAL/IdgMAwcwJAo8oNvGsAHNlAgMA0EwABGQh0MwjDsKw3CcPwvDcNsdCAGYCPIsi8Mo8isMo4jsIAJkIJiWOYtjWI49iuNYzD6PQpjCJooS8IEjC+LY0iKKkqjGJw8TRMExThIksTJCwhTlM4nj8IU+TlPU8iNP4uS1MIMjROo2jZMk4ybLYujTNs/SVIMkSTPQAytO4lzrJ09zXOcpSgvo8zsMssLpPw8KHI83ygsCmi9Lcrzku83jHJ8pyAvi3SMos3zqPymSsqSvy3Pikq8u8ozqtq3LYvCwTGrM5yYoqhKKrEGtHEUGQEDABA+pQ9AADsAFd8EIcbJumuApomubZvmmaFuWxbVqWzaNu2lbdvWva1sO2bbC2g7Tv2i6jp2y7zqus7rrui6Toe27Xpe977s+m6Pu+/Bnq+x7AbegHgd+sHHv+8HQaBn6YZB2HzshuGoYR1H4fRsGkeh7G0ZRjHkbWrHcYJnH8dJzHJHJkniap2nrqJsmaaZxmMYZvH2eplmOcRynme5vnOf5v7ea5wWxbp1mRaF6XxYF0G2dl0WJZl46pcVlW5c14XRq1jWld1hXlfV43ycN3WTfNnmdf1m29bts3bYtx3EZrGBBoACygYaYIfX9wPXbdQq84O6rYq8/bIn3u3Q8Pjw7SP/YHGOFwjxP+2TrdU+XIOuPT6CewT+dC57DOS/z+OT2LjtS+r8uWuzsca+w2P+xDzi847lO4+btPx23Juo676Pe6Av2m5z1j+wAFkIGe5/roey/7Kue6Luvx8byv17HFeB537evLztvc8Xwef27s++5rRQAA8IBkFDUI7Bia1gBBsBGmA5AgEaZC91tUIz0AcRauAAOEBGEp5dWIAAIzgihYcsC5DKDAMYVADEACsGCkEoJUAAQTgDAd2CA0AkXQiAAAxnIOA/8GLkOUAoWhqEAC+QA==');
maps.branchAlt = toMap('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');
maps.city = toMap('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=');
maps.freeway = toMap('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=');
maps.walls = toMap('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=');
maps.fork = toMap('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');
maps.fourcorners = toMap('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');
maps.king = toMap('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');
maps.block = toMap('N4IgJglgzgDgNgQwJ4gFwG10gMYAYD6cEA5gBYAuAQgE4D2A7gHYgA0OBRZVdTr7hJCjQbM2AUwC2McijZ4BXYbzkdB3EX3mchPUSEnTZ/beuXG1SvVou6+BmZtWLbKhTo2uTlu1IcBdFixrZw8QRjFaRnxaagRGYjE+cMjo2PjE8V8jYPczZKiYuISkiIK04szDRzdTPXzUooyw0ob0nyrPG1D6wra2HvKm+xQAoKdcupbeiuaU6aGs6q8XWbLGkrnB9odOkLyprf6D9cqd8z3JzZPV1pnhkFHziY21vpv57aN706/Fn6Wuvsrm8Btdvvo/hCOlCzvdHjlai9bk1QW9wQjvEdgTNUXdIRiVriUcc0fjxoisa8cSS8VV4eTMe9DkywWSaoyiUiPv9ds9Kciucz0QzCTTidiFnTAk8KSyQWLPgCLoLrpyeTKOQr+dyYdkRd0tXLaf5peCzZDhezRRKVaToeb7Ra2csDTbtULFvSra6qeLfYrebK1UbJWcCT6Be7WdDw0D/VG7Saxt645GQwGNdb4+n1bHLtng5aXamdYXPdK87bqW7dUq+TmG0XAfm02WY/qS8y20nMxHS4aHbCnY72ymW/2a4PfiOh1Lk8Xx12B87m1W/Wmm8qE9Xs5v68HuyMKx3F6rl6OF2ur7mT9fGyutw3Dw9j2O78/A5qax/e52z5OH33Q1n0eKcMz3INgPPWcYOnWC60g79oJGAJwGgeBkAAEQgag0EwXAWAIojCJI4iyNIijcFGciaMouiyOo+imNohjAhY5iOKotjOJ41j0HYgTmMYwSRNI4TeN48TRJEqSJIE2TpKE7jFJk5S5M4hT1JozSVMonStLE1DiGoCAwDw9AAGYWCsqyABZrIcuzHIc+ybIcrjLOc1yvOcpy3Ls0Z/JYby3JClzfOCwKfPsmLgoi2KEqi0L4pSoLbKS8K0tSryMr8nysrS0YErirLirCgLAgK/LqtC3KSpqzKcsqhq8uSwrmuSsqUrKuryvqtqms8gbhsa2qOtGibWpcoq4ti0rZv66bUIkMRyAQMAEDW8zGAAVzgOAWF2/bDr2g6jrO06TuO86rou67Lpux6Hue+79tGJ7Xrur7bp+j7vr+36Xq+96gcBz6wf+0GAehoGQfBmH4ahpHEZR4HAgRyHUYh7GMYhuHMYJnHkcJ3HzvxomsdJ4mKbR9Aqcp6n6ZJ07yaZmn2bZsn0cZnmGb55m3u5/mOd5gWCdZ0WReFpmJelyXOeJ2Wxal5WZaF1X5c1/mlZV3WFc+vxUJgTbSCgczyKsi26MtvS1IIm3iIdkinYIgBGWSXfcijPfdu2Frmuiut9/iKNd626LD8jg6j8OY6j2TI+9iOI5m2LE+IoOU79n3k/j7Pc9DrOQ8dgviPTkjo4ozOY+Kyuy9Liui7jwvm7LhOG7dova+T7v49QsQAA8IHIPC3YAVlQ2AECYGBaAgRhyDNjAQ4s0YAHZCNGV2x831CACNiFHsS2D3mIwDEXDUAAJjHneQFP6hz+oABBOAYFIBA0AssOcFoOAl9dgANjYDwABgCAC+QA==');
maps.lake = toMap('N4IgJglgzgDgNgQwJ4gFwG10gC4HsDuApgE4gA0OBJ5lRpFedNj1DV9trnHLP7z/CgGMAjAH04EAOYALbACE4AV0I1RYgLaFISjYpU1CGmNhQUjJlAF0yWXgKZtH3B13tO3glx77P1k2QVlVXNjU0MwsxALcJs7L3dvJMSUhLTnVL9xALl9EOjItXEtHT1gos1tCF08kDjk9M8Mxt8mttaOipygg1DLLulc8uFswZ7Vesz2106RiTHaue7FkH8F4dXRwJW17Y3dod7N+b2jmKiD8Zm62wbm++ml9aP1Euqys8K+8O+o84j+r8Bqd8vZJi1rj5IcdlvtilUaht/nM3oiXltDvlLjsMVcniDgZjruCHrM7lxsXDKqUVsjjqiPljcSspmTWTd4lkTkSgbyYc8mdy8fSEYyAT8RTSqbCjuyofKXCSKcykV8CoD1RK6dq1a9RTihSyIQr2UqOJTPhqLYKZTaBYThdaHQbbdC5eTSPUnfieZqLirZcaPW6g+7Tbc9VL0dT3rTdQHQaGk6SQymTfx6jqNXTvcH02m84Xw1gsxLI7Hpfb848i8ma6abOBoPBkAARCCkDDoAAMZF7/b7g4Hw6HQ7iI4no8n/fHU7n06ns4Xy8XthX67Ha/n2+XS53++He43u63x4PR4P59Pl/XF7PE7vN/nj/vm57T9vjakxAgYDQmAAZjIICQOAsDQIgsgACZoLIAAWPs4kg5DwNQmCEIwpDUJQlD0NgqCsJw7C0Pg/DCOImDKPw6iEJggDyMgqiMNI5jaOAhiSLwqjuNg+jbCIqjeyonCsJ4ni2Lo4i+PQIC8NYljqJE/jYIk6ieKU9AmN4qSdJAuItMkoiNPkwzdKk2dVKM3SrEbLRsAQMAEHs/90AAOyUOA4DIdzPO8jyvJ8gL/L83zApCoLQuCsLoqi2LPLiGLIqSiKUvCtLEtSjL0v8hK4syvLsuSwr8qKjLctKgqsqqyqaoq+LbGquqSua4rWrKhrapaxqus64ryp6pq2t67rwv6obBpGybOrGqaJuG+bkpmhaBpW8aUqWubNtW2a4A27blrWta9sOnaTumjqtrOy6duO067oOwKbIoGAnJkKAXNfSdZJfJ9ZOgn6NyAmdr0+sDgffUHeyBxCQe3P6xLfQGbwBj8YYh/cRGR695OYzHb2vPHUcPAmidXdHCchuJcdJ4n0EximacQxtCAADwgbB/wAdjITnG1gBB8FcmBcAgVzsHersRAQ7tZylp6QAAIykf9icV3BiDAahUCggBWHWKAV9XNeIABBOAYBkBA0AAzHVlwOAJZEfWQGIAhHZ1gBfIA==');
