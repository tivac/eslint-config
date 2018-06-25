"use strict";

module.exports = {
    rules : {
        "accessor-pairs"        : "off",
        "array-bracket-spacing" : [ "warn",
            "always",
            {
                arraysInArrays  : false,
                singleValue     : true,
                objectsInArrays : false
            }
        ],
        "array-callback-return"     : "warn",
        "arrow-body-style"          : [ "warn", "as-needed" ],
        "arrow-parens"              : [ "error", "always" ],
        "arrow-spacing"             : "error",
        "block-scoped-var"          : "warn",
        "block-spacing"             : [ "warn", "always" ],
        "brace-style"               : "error",
        "callback-return"           : [ "error", [ "callback", "cb", "next", "done" ]],
        "camelcase"                 : [ "warn", { properties : "never" }],
        "comma-dangle"              : [ "warn", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "never",
            "exports": "never",
            "functions": "ignore"
        }]
        "comma-spacing"             : "warn",
        "comma-style"               : [ "warn", "last" ],
        "complexity"                : [ "warn", 15 ],
        "computed-property-spacing" : "off",
        "consistent-return"         : "warn",
        "consistent-this"           : [ "warn", "self" ],
        "constructor-super"         : "error",
        "curly"                     : "error",
        "default-case"              : "warn",
        "dot-location"              : [ "error", "property" ],
        "dot-notation"              : "warn",
        "eol-last"                  : "error",
        "eqeqeq"                    : "warn",
        "for-direction"             : "warn",
        "func-names"                : "off",
        "func-style"                : "off",
        "generator-star-spacing"    : "error",
        "getter-return"             : "error",
        "global-require"            : "off",
        "guard-for-in"              : "off",
        "handle-callback-err"       : "off",
        "id-blacklist"              : "off",
        "id-length"                 : "off",
        "id-match"                  : "off",
        "indent"                    : "off",
        "init-declarations"         : "off",
        "jsx-quotes"                : "off",
        "key-spacing" : [ "warn", {
            "mode"        : "minimum",
            "beforeColon" : true,
            "afterColon"  : true,
            "align"       : {
                "beforeColon" : true,
                "afterColon"  : true,
                "on"          : "colon"
            }
        }],
        "keyword-spacing" : [ "warn", {
            before    : true,
            after     : false,
            overrides : {
                return : {
                    after : true
                },
                else : {
                    after : true
                },
                try : {
                    after : true
                },
                case : {
                    after : true
                },
                from : {
                    after : true
                },
                import : {
                    after : true
                },
                export : {
                    after : true
                },
                const : {
                    after : true
                },
                let : {
                    after : true
                },
                var : {
                    after : true
                }
            }
        }],
        "linebreak-style"      : "off",
        "lines-around-comment" : [ "off", {
            beforeBlockComment : true,
            beforeLineComment  : true,
            allowBlockStart    : true,
            allowObjectStart   : true,
            allowArrayStart    : true
        }],
        "max-nested-callbacks"     : "off",
        "max-params"               : [ "warn", 4 ],
        "new-cap"                  : [ "error" ],
        "new-parens"               : "error",
        "max-statements"           : [ "warn", 15, { ignoreTopLevelFunctions : true }],
        "newline-after-var"        : "warn",
        "newline-before-return"    : "warn",
        "newline-per-chained-call" : "warn",
        "no-alert"                 : "warn",
        "no-array-constructor"     : "error",
        "no-await-in-loop"         : "warn",
        "no-bitwise"               : "error",
        "no-caller"                : "error",
        "no-case-declarations"     : "error",
        "no-catch-shadow"          : "error",
        "no-class-assign"          : "error",
        "no-compare-neg-zero"      : "error",
        "no-cond-assign"           : "error",
        "no-confusing-arrow"       : [ "error", { allowParens : true }],
        "no-console"               : "warn",
        "no-const-assign"          : "error",
        "no-constant-condition"    : "error",
        "no-continue"              : "off",
        "no-control-regex"         : "off",
        "no-debugger"              : "warn",
        "no-delete-var"            : "error",
        "no-div-regex"             : "warn",
        "no-dupe-args"             : "error",
        "no-dupe-class-members"    : "error",
        "no-dupe-keys"             : "error",
        "no-duplicate-case"        : "error",
        "no-else-return"           : "error",
        "no-empty"                 : "warn",
        "no-empty-character-class" : "warn",
        "no-empty-function"        : "warn",
        "no-empty-pattern"         : "warn",
        "no-eq-null"               : "off",
        "no-eval"                  : "error",
        "no-ex-assign"             : "error",
        "no-extend-native"         : "error",
        "no-extra-bind"            : "warn",
        "no-extra-boolean-cast"    : "warn",
        "no-extra-label"           : "error",
        "no-extra-parens"          : "off",
        "no-extra-semi"            : "warn",
        "no-fallthrough"           : "warn",
        "no-floating-decimal"      : "error",
        "no-func-assign"           : "warn",
        "no-implicit-coercion"     : "warn",
        "no-implicit-globals"      : "error",
        "no-implied-eval"          : "error",
        "no-inline-comments"       : "off",
        "no-inner-declarations"    : "off",
        "no-invalid-regexp"        : "error",
        "no-invalid-this"          : "off",
        "no-irregular-whitespace"  : "warn",
        "no-iterator"              : "error",
        "no-label-var"             : "error",
        "no-labels"                : "error",
        "no-lone-blocks"           : "warn",
        "no-lonely-if"             : "error",
        "no-loop-func"             : "warn",
        "no-magic-numbers"         : "off",
        "no-mixed-requires"        : "off",
        "no-multi-spaces"          : [ "warn", {
            exceptions : {
                ArrayExpression      : true,
                AssignmentExpression : true,
                CallExpression       : true,
                LogicalExpression    : true,
                ObjectExpression     : true,
                Property             : true,
                SwitchCase           : true,
                VariableDeclarator   : true
            }
        }],
        "no-mixed-spaces-and-tabs"     : "error",
        "no-multi-str"                 : "error",
        "no-multiple-empty-lines"      : "warn",
        "no-native-reassign"           : "error",
        "no-negated-condition"         : "off",
        "no-negated-in-lhs"            : "warn",
        "no-nested-ternary"            : "error",
        "no-new"                       : "off",
        "no-new-func"                  : "off",
        "no-new-object"                : "error",
        "no-new-require"               : "off",
        "no-new-symbol"                : "error",
        "no-new-wrappers"              : "error",
        "no-obj-calls"                 : "off",
        "no-octal"                     : "error",
        "no-octal-escape"              : "error",
        "no-param-reassign"            : "off",
        "no-path-concat"               : "off",
        "no-plusplus"                  : "off",
        "no-process-env"               : "off",
        "no-process-exit"              : "off",
        "no-proto"                     : "error",
        "no-redeclare"                 : "warn",
        "no-regex-spaces"              : "warn",
        "no-restricted-imports"        : "off",
        "no-restricted-modules"        : "off",
        "no-restricted-syntax"         : [ "error", "WithStatement" ],
        "no-return-assign"             : "warn",
        "no-script-url"                : "error",
        "no-self-compare"              : "warn",
        "no-sequences"                 : "error",
        "no-shadow"                    : "warn",
        "no-shadow-restricted-names"   : "error",
        "no-spaced-func"               : "warn",
        "no-sparse-arrays"             : "warn",
        "no-sync"                      : "off",
        "no-ternary"                   : "off",
        "no-this-before-super"         : "error",
        "no-throw-literal"             : "warn",
        "no-trailing-spaces"           : [ "warn", { skipBlankLines : true }],
        "no-undef"                     : "error",
        "no-undef-init"                : "error",
        "no-undefined"                 : "off",
        "no-underscore-dangle"         : "off",
        "no-unexpected-multiline"      : "error",
        "no-unmodified-loop-condition" : "error",
        "no-unneeded-ternary"          : "warn",
        "no-unreachable"               : "error",
        "no-unused-expressions"        : "warn",
        "no-unused-vars"               : [ "warn", {
            args               : "after-used",
            ignoreRestSiblings : true,
            caughtErrors       : "none"
        }],
        "no-useless-call"               : "warn",
        "no-useless-concat"             : "warn",
        "no-useless-constructor"        : "error",
        "no-var"                        : "off",
        "no-void"                       : "error",
        "no-warning-comments"           : "off",
        "no-whitespace-before-property" : "error",
        "no-with"                       : "error",
        "object-curly-spacing"          : [ "warn",
            "always",
            {
                objectsInObjects : true,
                arraysInObjects  : true
            }
        ],
        "object-shorthand" : "warn",
        "one-var"          : [ "error", {
            var   : "always",
            let   : "never",
            const : "never"
        }],
        "one-var-declaration-per-line" : [ "warn", "initializations" ],
        "operator-assignment"          : "off",
        "operator-linebreak"           : [ "warn", "after" ],
        "padded-blocks"                : [ "warn", "never" ],
        "prefer-arrow-callback"        : "error",
        "prefer-const"                 : "warn",
        "prefer-destructuring"         : [ "warn", {
            "VariableDeclarator" : {
                "array" : true,
                "object" : true
            },
            "AssignmentExpression" : {
                "array" : false,
                "object" : false
            }
        }],
        "prefer-rest-params"           : "warn",
        "prefer-spread"                : "warn",
        "prefer-template"              : "warn",
        "quote-props"                  : [ "warn", "as-needed" ],
        "quotes"                       : [ "error", "double", {
            avoidEscape           : true,
            allowTemplateLiterals : true
        }],
        "radix"         : "warn",
        "require-jsdoc" : "off",
        "require-yield" : "error",
        "semi"          : "error",
        "semi-spacing"  : [ "warn", {
            before : false,
            after  : true
        }],
        "sort-vars"                   : "off",
        "space-before-blocks"         : [ "warn", "always" ],
        "space-before-function-paren" : [ "warn", {
            anonymous  : "never",
            named      : "never",
            asyncArrow : "always"
        }],
        "space-in-parens"        : [ "warn", "never" ],
        "space-infix-ops"        : "error",
        "space-unary-ops"        : "off",
        "spaced-comment"         : [ "warn", "always" ],
        "strict"                 : "off",
        "template-curly-spacing" : "error",
        "template-tag-spacing"   : [ "error", "never" ],
        "use-isnan"              : "error",
        "valid-jsdoc"            : "off",
        "valid-typeof"           : "error",
        "vars-on-top"            : "warn",
        "wrap-iife"              : "warn",
        "wrap-regex"             : "off",
        "yield-star-spacing"     : "error",
        "yoda"                   : "warn",
        "no-use-before-define"   : "warn",
    }
};
