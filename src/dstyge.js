us = us || {};
us.dontstop = us.dontstop || {};
us.dontstop.dstyge = us.dontstop.dstyge || {};

(function (dstyge) {
    dstyge.LiveCode = function LiveCode (global) {
        this.global = global;
    };

    dstyge.LiveCode.NAMESPACE_SEPARATOR = ".";

    dstyge.LiveCode.prototype.beginTransaction = function LiveCode_beginTransaction () {
        return new dstyge.Transaction(this.global);
    };

    dstyge.Transaction = function Transaction (global) {
        this.global = global;
        this.journal = [];
    };

    dstyge.Transaction.prototype.createNamespace = function Transaction_createNamespace (name) {
        var last = 0, idx, part, 
        journal = this.journal,
        parent = this.global,
        sep = dstyge.LiveCode.NAMESPACE_SEPARATOR;

        for (idx = name.indexOf(sep);
             idx !== -1;
             idx = name.indexOf(sep, idx+1)) {
            part = name.slice(last, idx);
            if (parent[part] === undefined) {
                parent[part] = {};
                journal[journal.length] = [function () { delete parent[part]; }];
            }
            parent = parent[part];
            last = idx + 2;
        }
        part = name.slice(last);
        if (parent[part] === undefined) {
            parent[part] = {};
            journal[journal.length] = [function () { delete parent[part]; }];
        }

        return
    };

    dstyge.Transaction.prototype.createObject = function Transaction_createObject (name, cons) {
        var oldCons;

        this.createNamespace(name);
        oldCons =
    };

    dstyge.Transaction.prototype.addFunctionToPrototype = function Transaction_addFunctionToPrototype (obj, name, fn) {

    };

    dstyge.Transaction.prototype.addConstant = function Transaction_addConstant (obj, name, value) {

    };

    dstyge.Transaction.prototype.addFunction = function Transaction_addFunction (obj, name, fn) {

    };

    dstyge.Transaction.prototype.commit = function Transaction_commit () {

    };

    dstyge.Transaction.prototype.rollback = function Transaction_rollback () {

    };

}(us.dontstop.dstyge));
