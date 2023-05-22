USE GeoProject;
GO

-- CREATE TABLES
-- TABLE COORDINATES
IF OBJECT_ID(N'dbo._sap_coordinates',N'U') IS NOT NULL
DROP TABLE _sap_coordinates
GO
CREATE TABLE _sap_coordinates (
	coordinates_id  INT IDENTITY(1,1) PRIMARY KEY ,
	longitude DECIMAL(18,7),
	latitude DECIMAL(18,7),
	created  DATETIME DEFAULT GETDATE(),
    _row_guid UNIQUEIDENTIFIER DEFAULT NEWID()
)
GO

-- TABLE LOGS
IF OBJECT_ID(N'dbo._sap_logs',N'U') IS NOT NULL
DROP TABLE _sap_logs
GO
CREATE TABLE _sap_logs (
	id INT IDENTITY(1,1) PRIMARY KEY ,
	log_identifier VARCHAR(255),
	longitude DECIMAL(18,7),
	latitude DECIMAL (18,7),
	coordinate_created DATETIME,
	_log_created  DATETIME DEFAULT GETDATE(),
    _row_guid UNIQUEIDENTIFIER DEFAULT NEWID()
)
GO